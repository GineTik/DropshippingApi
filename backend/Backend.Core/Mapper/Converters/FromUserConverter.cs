using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Entities.User;
using Backend.Core.Entities.User.Supplier;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Mapper.Converters;

public class FromUserConverter : ITypeConverter<User, UserDto>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public FromUserConverter(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public UserDto Convert(User source, UserDto destination, ResolutionContext context)
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
            var settings = _dataContext.DropshipperSettings
                .FirstOrDefault(s => s.Id == source.SettingsId);
            result.DropshipperSettings = _mapper.Map<DropshipperSettingsDto>(settings);
        }
        else if (source.UserRoles.Any(r => r.RoleId == (int)Roles.Supplier))
        {
            var settings = _dataContext.SupplierSettings
                .FirstOrDefault(s => s.Id == source.SettingsId);
            result.SupplierSettings = _mapper.Map<SupplierSettingsDto>(settings);
        }

        return result;
    }
}