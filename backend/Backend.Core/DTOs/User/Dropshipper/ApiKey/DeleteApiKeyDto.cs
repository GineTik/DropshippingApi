namespace Backend.Core.DTOs.User.Dropshipper.ApiKey;

public class DeleteApiKeyDto
{
    public int UserId { get; set; }
    public string Key { get; set; } = null!;
}