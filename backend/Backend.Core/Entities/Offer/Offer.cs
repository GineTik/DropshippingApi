using System.ComponentModel.DataAnnotations.Schema;
using System.Dynamic;
using Backend.Core.EF;
using Backend.Core.Entities.User.Supplier;

namespace Backend.Core.Entities.Offer;

public class Offer
{
    public int Id { get; set; }
    
    [ForeignKey(nameof(DataContext.SupplierSettings))]
    public int SupplierId { get; set; }

    public virtual SupplierSettings Supplier { get; set; } = null!;

    public ExpandoObject Fields { get; set; } = null!;
}