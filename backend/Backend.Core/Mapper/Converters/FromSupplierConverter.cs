using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.Entities;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Services.User.Supplier;

namespace Backend.Core.Mapper.Converters;

public class FromSupplierConverter : ITypeConverter<SupplierSettings, SupplierSettingsDto>
{
    private readonly LinkService _linkService;

    public FromSupplierConverter(LinkService linkService)
    {
        _linkService = linkService;
    }

    public SupplierSettingsDto Convert(SupplierSettings source, SupplierSettingsDto destination, ResolutionContext context)
    {
        return new SupplierSettingsDto
        {
            Id = source.Id,
            YmlLink = source.YmlLink,
            YmlLoadType = ((YmlLoadTypes)source.YmlLoadTypeId).ToString(),
            RefreshTimeId = source.RefreshTimeId,
            PublicName = source.PublicName,
            ApiName = source.ApiName,
            Description = source.Description,
            Searchable = source.Searchable,
            OffersUpdatedAtUtc = source.OffersUpdatedAtUtc,
            Links = _linkService.GetAllOfSupplier(source.Id).Result.Select(o => new GetLinkDto
            {
                Name = o.Name,
                Url = o.Url
            })
        };
    }
}