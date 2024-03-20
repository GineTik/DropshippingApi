namespace Backend.Core.DTOs.User.Dropshipper.ApiKey;

public class ApiKeyDto
{
    public required string Key { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
}