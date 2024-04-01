using System.Runtime.InteropServices.JavaScript;
using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class AvailableParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, Dictionary<string, object> fields)
    {
        if (offer.Attribute("available") == null)
            return;

        fields["available"] = offer.Attribute("available")!.Value;
    }
}