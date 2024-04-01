using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class PictureParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, Dictionary<string, object> fields)
    {
        var pictures = offer.Elements("picture");
        fields["pictures"] = pictures.Select(o => o.Value).ToArray();
        fields.Remove("picture");
    }
}