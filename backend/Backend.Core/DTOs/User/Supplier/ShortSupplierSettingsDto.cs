using System.Collections;
using Backend.Core.DTOs.User.Supplier.Tag;

namespace Backend.Core.DTOs.User.Supplier;

public class ShortSupplierSettingsDto
{
    public int Id { get; set; }
    public string PublicName { get; set; } = null!;
    public string? Description { get; set; }
    public IEnumerable<TagDto> Tags { get; set; } = null!;
}