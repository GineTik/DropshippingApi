namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class DeleteAllowHostDto
{
    public int UserId { get; set; }
    public string Host { get; set; } = null!;
}