using System.Dynamic;
using Backend.Core.EF;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class OfferService
{
    private readonly DataContext _dataContext;

    public OfferService(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<int> GetCount(int supplierId)
    {
        return await _dataContext.Offers.CountAsync(o => o.SupplierId == supplierId);
    }

    public async Task<ExpandoObject?> GetFirst(int supplierId)
    {
        var offer = await _dataContext.Offers.FirstOrDefaultAsync(o => o.SupplierId == supplierId);
        return offer?.Fields;
    }
}