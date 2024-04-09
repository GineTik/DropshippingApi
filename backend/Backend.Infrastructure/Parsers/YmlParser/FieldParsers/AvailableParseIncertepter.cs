using System.Dynamic;
using System.Runtime.InteropServices.JavaScript;
using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class AvailableParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, ExpandoObject fields)
    {
        if (offer.Attribute("available") == null)
            return;

        fields.TryAdd("available", offer.Attribute("available")!.Value);
    }
}