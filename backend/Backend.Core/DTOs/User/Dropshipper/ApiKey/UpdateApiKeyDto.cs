namespace Backend.Core.DTOs.User.Dropshipper.ApiKey;

public class UpdateApiKeyDto
{
    public int UserId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Key { get; set; } = null!;
}