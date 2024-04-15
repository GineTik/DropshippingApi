namespace Backend.Core.DTOs.User.Supplier.Link;

public class GetLinkDto
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Url { get; set; } = null!;
    public bool Verified { get; set; }
}