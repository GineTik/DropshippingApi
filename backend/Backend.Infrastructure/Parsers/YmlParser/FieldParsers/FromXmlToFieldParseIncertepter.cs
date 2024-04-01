using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

public class FromXmlToFieldParseIncertepter : IYmlParseIncertepter
{
    public void Parse(XElement offer, XElement shop, Dictionary<string, object> fields)
    {
        foreach (var xField in offer.Elements().DistinctBy(o => o.Name)) 
            fields[xField.Name.LocalName] = xField.Value;
    }
}