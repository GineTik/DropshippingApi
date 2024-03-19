using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.Entities;
using Backend.Core.Mapper.Converters;

namespace Backend.Core.Mapper.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, Task<UserDto>>()
            .ConvertUsing<UserToUserDtoConverter>();
        
        CreateMap<DropshipperSettings, DropshipperSettingsDto>()
            .ConvertUsing<DropshipperSettingsConverter>();
        
        CreateMap<SupplierSettings, SupplierSettingsDto>()
            .ConvertUsing<SupplierSettingsConverter>();
    }
}