namespace Backend.Core.DTOs.User.Dropshipper.AllowHost;

public class UpdateAllowHostDto
{
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string OldHost { get; set; } = null!;
    public string NewHost { get; set; } = null!;
}