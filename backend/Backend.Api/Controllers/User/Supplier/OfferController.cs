using System.Dynamic;
using Backend.Core.Services.User.Supplier;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Supplier;

[Route("api/suppliers/offers")]
public class OfferController
{
    private readonly OfferService _offerService;

    public OfferController(OfferService offerService)
    {
        _offerService = offerService;
    }

    [HttpGet("first/{supplierId}")]
    public async Task<ExpandoObject?> GetFirst(int supplierId)
    {
        return await _offerService.GetFirst(supplierId);
    }
    
    [HttpGet("count/{supplierId}")]
    public async Task<int> GetCount(int supplierId)
    {
        return await _offerService.GetCount(supplierId);
    }
}