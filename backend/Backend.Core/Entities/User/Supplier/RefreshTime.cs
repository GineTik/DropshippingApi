namespace Backend.Core.Entities.User.Supplier;

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