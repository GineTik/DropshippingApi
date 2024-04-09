using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.DTOs.User.Supplier.Tag;
using Backend.Core.Entities;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Services.User.Supplier;

namespace Backend.Core.Mapper.Converters;

public class FromSupplierConverter : ITypeConverter<SupplierSettings, SupplierSettingsDto>
{
    private readonly LinkService _linkService;
    private readonly TagService _tagService;

    public FromSupplierConverter(LinkService linkService, TagService tagService)
    {
        _linkService = linkService;
        _tagService = tagService;
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
            }),
            Tags = _tagService.GetAllOfSupplier(source.Id).Result.Select(o => new TagDto
            {
                Name = o.Name,
            })
        };
    }
}