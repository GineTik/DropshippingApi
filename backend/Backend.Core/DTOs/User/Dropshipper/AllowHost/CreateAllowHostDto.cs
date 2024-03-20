namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class CreateAllowHostDto
{
    public int UserId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Host { get; set; } = null!;
}