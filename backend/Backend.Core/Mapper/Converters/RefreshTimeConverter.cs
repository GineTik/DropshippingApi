using AutoMapper;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.Entities;

namespace Backend.Core.Mapper.Converters;

public class RefreshTimeConverter : ITypeConverter<RefreshTime, RefreshTimeDto>
{
    public RefreshTimeDto Convert(RefreshTime source, RefreshTimeDto destination, ResolutionContext context)
    {
        return new RefreshTimeDto
        {
            Id = source.Id,
            Name = source.ToString(),
        };
    }
}