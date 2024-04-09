using System.Dynamic;
using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class FromXmlToFieldParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, ExpandoObject fields)
    {
        foreach (var xField in offer.Elements().DistinctBy(o => o.Name)) 
            fields.TryAdd(xField.Name.LocalName, xField.Value);
    }
}