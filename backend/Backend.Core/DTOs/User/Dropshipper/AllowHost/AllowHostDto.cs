namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class AllowHostDto
{
    public required string Host { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
}