using Backend.Core.Services;
using Coravel.Invocable;

namespace Backend.Core.Sheduler;

public class UnloadOfferJob : IInvocable
{
    private readonly OfferUnloaderService _offerUnloaderService;

    public UnloadOfferJob(OfferUnloaderService offerUnloaderService)
    {
        _offerUnloaderService = offerUnloaderService;
    }

    public async Task Invoke()
    {
        await _offerUnloaderService.UnloadOffersByLink();
    }
}