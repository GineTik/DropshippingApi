namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class RefreshAllowHostDto
{
    public int UserId { get; set; }
    public required string Host { get; set; }
}