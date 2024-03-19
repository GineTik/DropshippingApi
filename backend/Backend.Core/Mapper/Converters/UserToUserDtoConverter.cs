using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.EF;
using Backend.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Mapper.Converters;

public class UserToUserDtoConverter : ITypeConverter<User, Task<UserDto>>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public UserToUserDtoConverter(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public async Task<UserDto> Convert(User source, Task<UserDto> destination, ResolutionContext context)
    {
        var roleIds = source.UserRoles.Select(ur => ur.RoleId);
        var result = new UserDto
        {
            Email = source.Email,
            EmailIsConfirmed = source.UserRoles.Any(r => r.RoleId == (int)Roles.UnconfirmedEmail) == false,
            Roles = _dataContext.Roles.Where(r => roleIds.Contains(r.Id)).Select(r => r.Name)
        };
        
        if (source.UserRoles.Any(r => r.RoleId == (int)Roles.Dropshipper))
        {
            result.DropshipperSettings = _mapper.Map<DropshipperSettingsDto>(await _dataContext.DropshipperSettings
                .FirstOrDefaultAsync(s => s.Id == source.SettingsId));
        }
        else if (source.UserRoles.Any(r => r.RoleId == (int)Roles.Supplier))
        {
            result.SupplierSettings = _mapper.Map<SupplierSettingsDto>(await _dataContext.SupplierSettings
                .FirstOrDefaultAsync(s => s.Id == source.SettingsId));
        }

        return result;
    }
}