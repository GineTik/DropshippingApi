using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Dropshipper;
using Backend.Core.DTOs.User.Dropshipper.AllowHost;
using Backend.Core.DTOs.User.Dropshipper.ApiKey;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.Entities;
using Backend.Core.Entities.User;
using Backend.Core.Entities.User.Dropshipper;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Mapper.Converters;

namespace Backend.Core.Mapper.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserDto>()
            .ConvertUsing<FromUserConverter>();

        CreateMap<DropshipperSettings, DropshipperSettingsDto>();

        CreateMap<ApiKey, ApiKeyDto>();
        CreateMap<CreateApiKeyDto, ApiKey>();

        CreateMap<AllowHost, AllowHostDto>();
        CreateMap<CreateAllowHostDto, AllowHost>();

        CreateMap<SupplierSettings, SupplierSettingsDto>()
            .ForMember(
                d => d.YmlLoadType,
                opt => opt.MapFrom(s => ((YmlLoadTypes)s.YmlLoadTypeId).ToString()))
            .ConvertUsing<FromSupplierConverter>();

        CreateMap<RefreshTime, RefreshTimeDto>()
            .ForMember(
                d => d.Name,
                opt => opt.MapFrom(s => s.ToString()));

        CreateMap<Link, GetLinkDto>();
    }
}