using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.DTOs.User.Supplier.Tag;

namespace Backend.Core.DTOs.User.Supplier;

public class SupplierSettingsDto
{
    public int Id { get; set; }
    public string PublicName { get; set; } = null!;
    public string ApiName { get; set; } = null!;
    public string? Description { get; set; } = null!;
    public bool Searchable { get; set; }
    public string YmlLoadType { get; set; } = null!;
    public string? YmlLink { get; set; } = null!;
    public int? RefreshTimeId { get; set; }
    public DateTime OffersUpdatedAtUtc { get; set; }

    public IEnumerable<GetLinkDto> Links { get; set; } = null!;
    public IEnumerable<TagDto> Tags { get; set; } = null!;
}