using System.Dynamic;
using System.Xml.Linq;

namespace Backend.Infrastructure.Parsers.YmlParser;

public interface IYmlParseIncertepter
{
    void Parse(XElement offer, XElement shop, ExpandoObject fields);
}