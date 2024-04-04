namespace Backend.Core.Entities;

public class AllowHost
{
    public int Id { get; set; }
    public string Host { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string? Description { get; set; }
    public int UserId { get; set; }
}