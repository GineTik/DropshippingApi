namespace Backend.Core.Entities.User.Dropshipper;

public class ApiKey
{
    public int Id { get; set; }
    public required string Key { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public int UserId { get; set; }
}