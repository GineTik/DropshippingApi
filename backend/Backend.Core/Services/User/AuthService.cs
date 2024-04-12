using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Auth;
using Backend.Core.EF;
using Backend.Core.Entities.User;
using Backend.Core.Entities.User.Dropshipper;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Backend.Core.Interfaces;
using Backend.Core.Interfaces.ConfirmationCode;
using Backend.Core.Interfaces.JwtTokenFactory;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User;

public class AuthService
{
    private readonly IJwtTokenFactory _jwtTokenFactory;
    private readonly IMailSender _mailSender;
    private readonly IConfirmationCodeFactory _confirmationCodeFactory;
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IValidator<LoginDto> _loginValidator;
    private readonly IValidator<RegistrationDropshipperDto> _registrationDropshipperValidator;
    private readonly IValidator<RegistrationSupplierDto> _registrationSupplierValidator;
    
    public AuthService(IJwtTokenFactory jwtTokenFactory, DataContext dataContext, IMapper mapper, IPasswordHasher passwordHasher, IConfirmationCodeFactory confirmationCodeFactory, IMailSender mailSender, IValidator<LoginDto> loginValidator, IValidator<RegistrationDropshipperDto> registrationDropshipperValidator, IValidator<RegistrationSupplierDto> registrationSupplierValidator)
    {
        _jwtTokenFactory = jwtTokenFactory;
        _dataContext = dataContext;
        _mapper = mapper;
        _passwordHasher = passwordHasher;
        _confirmationCodeFactory = confirmationCodeFactory;
        _mailSender = mailSender;
        _loginValidator = loginValidator;
        _registrationDropshipperValidator = registrationDropshipperValidator;
        _registrationSupplierValidator = registrationSupplierValidator;
    }
    
    public async Task<SuccessAuthDto> Login(LoginDto dto)
    {
        var result = await _loginValidator.ValidateAsync(dto);
        if (result.IsValid == false) throw new ServiceValidationException(result.Errors.First());
        
        var user = await _dataContext.Users.Include(user => user.UserRoles)
            .FirstOrDefaultAsync(u => u.Email == dto.Email);
        if (user is null || _passwordHasher.Compare(user.Password, dto.Password) == false) throw new UserNotExistsException();

        if (user.UserRoles.Any(r => r.RoleId == (int)Roles.UnconfirmedEmail))
        {
            user.ConfirmationCode = _confirmationCodeFactory.Create();
            await _dataContext.SaveChangesAsync();
            _mailSender.SendConfirmationCode(user.Email, user.ConfirmationCode);
        }

        var tokens = _jwtTokenFactory.CreateTokens(user);
        
        return  new SuccessAuthDto
        {
            AccessToken = tokens.AccessToken,
            RefreshToken = tokens.RefreshToken,
            User = _mapper.Map<UserDto>(user)
        };
    }

    public async Task<SuccessAuthDto> RegistrationDropshipper(RegistrationDropshipperDto dto)
    {
        var result = await _registrationDropshipperValidator.ValidateAsync(dto);
        if (result.IsValid == false) throw new ServiceValidationException(result.Errors.First());
        
        return await Registration(new Entities.User.User
            {
                Email = dto.Email,
                Password = _passwordHasher.Hash(dto.Password),
            }, 
            Roles.Dropshipper,
            new DropshipperSettings()
        );
    }

    public async Task<SuccessAuthDto> RegistrationSupplier(RegistrationSupplierDto dto)
    {
        var result = await _registrationSupplierValidator.ValidateAsync(dto);
        if (result.IsValid == false) throw new ServiceValidationException(result.Errors.First());
        
        return await Registration(new Entities.User.User
            {
                Email = dto.Email,
                Password = _passwordHasher.Hash(dto.Password),
            },
            Roles.Supplier,
            new SupplierSettings
            {
                PublicName = dto.PublicName,
                ApiName = dto.ApiName
            }
        );
    }

    public async Task<SuccessAuthDto> Refresh(string refreshToken)
    {
        if (_jwtTokenFactory.Validate(refreshToken, out var userId) == false)
            throw new RefreshTokenIncorrectException();

        var user = await _dataContext.Users.FirstAsync(u => u.Id == userId);
        var tokens = _jwtTokenFactory.CreateTokens(user);

        return new SuccessAuthDto
        {
            AccessToken = tokens.AccessToken,
            RefreshToken = tokens.RefreshToken,
            User = _mapper.Map<UserDto>(user)
        };
    }

    public async Task ConfirmEmail(int id, int confirmationCode)
    {
        var user = await _dataContext.Users
            .FirstOrDefaultAsync(u => u.Id == id);

        if (user == null || user.ConfirmationCode != confirmationCode)
            throw new FailedConfirmationEmailException();

        var userRole = await _dataContext.UserRoles.FirstOrDefaultAsync(u => u.UserId == user.Id && u.RoleId == (int)Roles.UnconfirmedEmail );
        if (userRole != null)
        {
            _dataContext.UserRoles.Remove(userRole);
            await _dataContext.SaveChangesAsync();
        }
    }
    
    
    private async Task<SuccessAuthDto> Registration(Entities.User.User newUser, Roles role, IBaseSettings settings)
    {
        var foundUser = await _dataContext.Users
            .FirstOrDefaultAsync(u => u.Email == newUser.Email);
        if (foundUser is not null) throw new UserAlreadyExistsException();

        newUser.ConfirmationCode = _confirmationCodeFactory.Create();
        _dataContext.Users.Add(newUser);
        await _dataContext.SaveChangesAsync();
        
        settings.UserId = newUser.Id;
        _dataContext.Add(settings);
        _dataContext.UserRoles.AddRange(
            new UserRole { UserId = newUser.Id, RoleId = (int)role }, 
            new UserRole { UserId = newUser.Id, RoleId = (int)Roles.UnconfirmedEmail }
        );
        await _dataContext.SaveChangesAsync();
        
        newUser.SettingsId = settings.Id;
        await _dataContext.SaveChangesAsync();
        
        _mailSender.SendConfirmationCode(newUser.Email, newUser.ConfirmationCode);
        
        var tokens = _jwtTokenFactory.CreateTokens(newUser);

        return new SuccessAuthDto
        {
            AccessToken = tokens.AccessToken,
            RefreshToken = tokens.RefreshToken,
            User = _mapper.Map<UserDto>(newUser)
        };
    }
}