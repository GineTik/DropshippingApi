using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.Entities;

namespace Backend.Core.Mapper.Converters;

public class SupplierSettingsConverter : ITypeConverter<SupplierSettings, SupplierSettingsDto>
{
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
        };
    }
}