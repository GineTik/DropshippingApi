using System.Xml.Linq;
using Backend.Core.Entities.Offer;
using Backend.Core.Interfaces;
using Backend.Infrastructure.Parsers.YmlParser.FieldParsers;

namespace Backend.Infrastructure.Parsers.YmlParser;

public class YmlParser : IYmlParser
{
    // order is important
    private readonly IEnumerable<IYmlParseIncertepter> _incertepters = new IYmlParseIncertepter[]
    {
        new FromXmlToFieldParseIncertepter(),
        new PictureParseIncertepter(),
        new CategoryParseIncertepter(),
        new AvailableParseIncertepter(),
    };
    
    public IEnumerable<Offer> Parse(string yml, int supplierId)
    {
        var xml = XDocument.Parse(yml);
        var shop = xml.Root?.Element("shop");

        if (shop == null)
        {
            Console.WriteLine("Xml category shop is null");
            return Array.Empty<Offer>();
        }

        var offers = shop.Element("offers")!.Elements("offer");
        var resultOffers = new List<Offer>();
        
        foreach (var offer in offers)
        {
            var fields = new Dictionary<string, object>();
            foreach (var incertepter in _incertepters)
                incertepter.Parse(offer, shop, fields);
            
            resultOffers.Add(new Offer
            {
                SupplierId = supplierId,
                Fields = fields
            });
        }

        return resultOffers;
    }
}