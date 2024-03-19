using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.Entities;

namespace Backend.Core.Mapper.Converters;

public class DropshipperSettingsConverter : ITypeConverter<DropshipperSettings, DropshipperSettingsDto>
{
    public DropshipperSettingsDto Convert(DropshipperSettings source, DropshipperSettingsDto destination, ResolutionContext context)
    {
        return new DropshipperSettingsDto();
    }
}