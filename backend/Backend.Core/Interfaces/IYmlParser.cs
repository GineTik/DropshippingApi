using Backend.Core.Entities.Offer;

namespace Backend.Core.Interfaces;

public interface IYmlParser
{
    IEnumerable<Offer> Parse(string yml, int supplierId);
}