namespace Backend.Core.DTOs.User.Dropshipper.ApiKey;

public class CreateApiKeyDto
{
    public int UserId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
}