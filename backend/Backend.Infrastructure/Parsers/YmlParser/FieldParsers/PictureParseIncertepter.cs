using System.Dynamic;
using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class PictureParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, ExpandoObject fields)
    {
        var pictures = offer.Elements("picture");
        fields.TryAdd("pictures", pictures.Select(o => o.Value).ToArray());
        fields.Remove("picture", out _);
    }
}