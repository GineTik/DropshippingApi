namespace Backend.Core.DTOs.User.Supplier.Link;

public class UpdateLinkDto
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Url { get; set; } = null!;
}