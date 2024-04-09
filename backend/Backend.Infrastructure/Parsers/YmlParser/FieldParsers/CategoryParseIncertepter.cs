using System.Dynamic;
using System.Xml.Linq;
using Backend.Core.Entities.Offer;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class CategoryParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, ExpandoObject fields)
    {
        if (offer.Element("categoryId") == null)
            return;
        
        var categories = shop.Element("categories")!.Elements("category");
        fields.TryAdd("category", ParseCategory(offer.Element("categoryId")!.Value, categories)!);
        fields.Remove("categoryId", out _);
    }

    private static Category? ParseCategory(string id, IEnumerable<XElement> categories)
    {
        var category = categories.FirstOrDefault(o => o.Attribute("id")!.Value == id);
        if (category == null)
            return null;
        
        var name = category.Value;
        var parentId = category.Attribute("parentId")?.Value;

        return new Category
        {
            Id = int.Parse(id),
            Name = name,
            Parent = parentId != null ? ParseCategory(parentId, categories) : null
        };
    }
}