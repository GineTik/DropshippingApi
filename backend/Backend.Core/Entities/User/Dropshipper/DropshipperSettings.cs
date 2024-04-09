namespace Backend.Core.Entities.User.Dropshipper;

public class DropshipperSettings : IBaseSettings
{
    public int Id { get; set; }
    public int MaxLengthOfAllows { get; set; }
    public int UserId { get; set; }
}