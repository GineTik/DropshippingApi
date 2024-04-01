using System.ComponentModel.DataAnnotations.Schema;
using Backend.Core.EF;

namespace Backend.Core.Entities.Offer;

public class Offer
{
    public int Id { get; set; }
    
    [ForeignKey(nameof(DataContext.SupplierSettings))]
    public int SupplierId { get; set; }

    public virtual SupplierSettings Supplier { get; set; } = null!;

    public IDictionary<string, object> Fields { get; set; } = null!;
}