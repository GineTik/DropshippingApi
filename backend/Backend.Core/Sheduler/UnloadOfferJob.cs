using Backend.Core.Services;
using Coravel.Invocable;

namespace Backend.Core.Sheduler;

public class UnloadOfferJob : IInvocable
{
    private readonly OfferService _offerService;

    public UnloadOfferJob(OfferService offerService)
    {
        _offerService = offerService;
    }

    public async Task Invoke()
    {
        await _offerService.UnloadOffersByLink();
    }
}