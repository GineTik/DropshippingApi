using System.Xml.Linq;
using Backend.Core.Entities.Offer;

namespace Backend.Infrastructure.Parsers.YmlParser;

public interface IYmlParseIncertepter
{
    void Parse(XElement offer, XElement shop, Dictionary<string, object> fields);
}