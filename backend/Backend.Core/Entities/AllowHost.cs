namespace Backend.Core.Entities;

public class AllowHost
{
    public int Id { get; set; }
    public required string Host { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public int UserId { get; set; }
}