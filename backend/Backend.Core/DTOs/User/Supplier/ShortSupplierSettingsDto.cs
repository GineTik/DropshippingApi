using System.Collections;

namespace Backend.Core.DTOs.User.Supplier;

public class ShortSupplierSettingsDto
{
    public int Id { get; set; }
    public string PublicName { get; set; } = null!;
    public string? Description { get; set; }
}