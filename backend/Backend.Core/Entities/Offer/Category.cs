namespace Backend.Core.Entities.Offer;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public Category? Parent { get; set; }
}