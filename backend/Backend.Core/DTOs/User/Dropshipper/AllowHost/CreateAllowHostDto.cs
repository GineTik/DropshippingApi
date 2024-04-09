namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class CreateAllowHostDto
{
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Host { get; set; } = null!;
}