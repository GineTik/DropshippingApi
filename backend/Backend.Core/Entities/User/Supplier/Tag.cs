namespace Backend.Core.Entities.User.Supplier;

public class Tag
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public bool Verified { get; set; }
    public virtual ICollection<SupplierSettings> SupplierSettings { get; set; } = null!;
}