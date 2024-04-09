using System.Net;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Backend.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Core.Services;

public class OfferUnloaderService
{
    private readonly IServiceScopeFactory _serviceScopeFactory;
    private readonly IYmlParser _ymlParser;

    public OfferUnloaderService(IYmlParser ymlParser, IServiceScopeFactory serviceScopeFactory)
    {
        _ymlParser = ymlParser;
        _serviceScopeFactory = serviceScopeFactory;
    }

    public async Task UnloadOffersByLink()
    {
        var suppliers =  await GetAvailableSuppliersByLinkAsync();
        if (suppliers == null)
            return;

        foreach (var supplier in suppliers.Where(o => !string.IsNullOrEmpty(o.YmlLink)))
        {
            Task.Run(async () =>
            {
                try
                {
                    var ymlCatalog = await GetYmlByLinkAsync(supplier.YmlLink!);
                    var offers = _ymlParser.Parse(ymlCatalog, supplier.Id).ToList();

                    using var scope = _serviceScopeFactory.CreateScope();
                    await using var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                    await using var transaction = await dataContext.Database.BeginTransactionAsync();
                    
                    var existingOffers = dataContext.Offers.Where(o => o.SupplierId == supplier.Id);
                    dataContext.RemoveRange(existingOffers);
                    dataContext.AddRange(offers);
                    supplier.OffersUpdatedAtUtc = DateTime.UtcNow;
                    dataContext.SupplierSettings.Update(supplier);
                    await dataContext.SaveChangesAsync();

                    await transaction.CommitAsync();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.ToString());
                }
            });
        }
    }

    private async Task<IEnumerable<SupplierSettings>?> GetAvailableSuppliersByLinkAsync()
    {
        var now = DateTime.Now;
        using var scope = _serviceScopeFactory.CreateScope();
        await using var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();

        var refreshTimes = await dataContext.AvailableYmlRefreshTimes.ToListAsync();
        var suitableRefreshTimes = refreshTimes.Where(o =>
        {
            return o.TimeType switch
            {
                TimeType.Minute => now.Minute != 0 && now.Minute % o.Time == 0,
                TimeType.Hour => now.Minute == 0 && now.Hour % o.Time == 0,
                TimeType.Day => now.Minute == 0 && now.Day % o.Time == 0,
                _ => false
            };
        }).ToList();

        if (suitableRefreshTimes.Any() == false)
            return null;

        var suitableRefreshTimeIds = suitableRefreshTimes.Select(o => o.Id);
        return await dataContext.SupplierSettings
            .Where(o => 
                suitableRefreshTimeIds.Contains(o.RefreshTimeId ?? -1) && 
                o.YmlLoadTypeId == (int)YmlLoadTypes.Link)
            .ToListAsync();
    }

    private async Task<string> GetYmlByLinkAsync(string link)
    {
        return await Task.Run(() =>
        {
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
            var response = new WebClient().DownloadString(link);
            return response;
        });
    }
}