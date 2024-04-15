using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Core.Entities.User.Supplier;

public class Link
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Url { get; set; } = null!;
    public bool Verified { get; set; }
    public int SupplierSettingsId { get; set; }
}