namespace Backend.Core.DTOs.User.Dropshipper.ApiKey;

public class RefreshApiKeyDto
{
    public int UserId { get; set; }
    public required string Key { get; set; }
}