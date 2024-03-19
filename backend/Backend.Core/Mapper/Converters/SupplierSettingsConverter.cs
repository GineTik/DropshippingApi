using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.Entities;

namespace Backend.Core.Mapper.Converters;

public class SupplierSettingsConverter : ITypeConverter<SupplierSettings, SupplierSettingsDto>
{
    public SupplierSettingsDto Convert(SupplierSettings source, SupplierSettingsDto destination, ResolutionContext context)
    {
        destination.YmlLoadType = source.YmlLoadType.ToString();
        destination.RefreshTime = source.RefreshTime.Name;
        return destination;
    }
}