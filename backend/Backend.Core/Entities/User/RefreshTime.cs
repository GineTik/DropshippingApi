using System.Collections;
using Backend.Core.Services.User.Supplier;

namespace Backend.Core.Entities;

public class RefreshTime
{
    public int Id { get; set; }
    public int Time { get; set; }
    public TimeType TimeType { get; set; }
    
    public virtual IEnumerable<SupplierSettings> Settings { get; set; } = null!;

    public override string ToString()
    {
        return Time + " " + TimeType.ToString().ToLower();
    }
}

public enum TimeType
{
    Minute,
    Hour, 
    Day
}