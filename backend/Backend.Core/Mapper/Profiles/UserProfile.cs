using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Dropshipper;
using Backend.Core.DTOs.User.Dropshipper.AllowHost;
using Backend.Core.DTOs.User.Dropshipper.ApiKey;
using Backend.Core.DTOs.User.Supplier;
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

        CreateMap<ApiKey, ApiKeyDto>();
        CreateMap<CreateApiKeyDto, ApiKey>();

        CreateMap<AllowHost, AllowHostDto>();
        CreateMap<CreateAllowHostDto, AllowHost>();
        
        CreateMap<SupplierSettings, SupplierSettingsDto>()
            .ConvertUsing<SupplierSettingsConverter>();

        CreateMap<RefreshTime, RefreshTimeDto>()
            .ConvertUsing<RefreshTimeConverter>();
    }
}