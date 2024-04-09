namespace Backend.Core.Entities.User.Supplier;

public class Tag
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public int SupplierSettingsId { get; set; }
}