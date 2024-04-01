namespace Backend.Core.Entities;

public class DropshipperSettings : IBaseSettings
{
    public int Id { get; set; }
    public int MaxLengthOfAllows { get; set; }
    public int UserId { get; set; }
}