namespace Backend.Core.Entities.User.Supplier;

public class SupplierSettings : IBaseSettings
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    
    public string PublicName { get; set; } = null!;
    
    public string ApiName { get; set; } = null!;
    
    public string? Description { get; set; }
    
    public bool Searchable { get; set; }
    
    public int YmlLoadTypeId { get; set; }
    
    public string? YmlLink { get; set; }
   
    public int? RefreshTimeId { get; set; }
    
    public virtual RefreshTime RefreshTime { get; set; } = null!;
    
    public DateTime OffersUpdatedAtUtc { get; set; }
    
    public virtual ICollection<Link> Links { get; set; } = null!;
}