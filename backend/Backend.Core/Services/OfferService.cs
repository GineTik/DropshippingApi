using System.Net;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Exceptions.ServiceExceptions;
using Backend.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services;

public class OfferService
{
    private readonly DataContext _dataContext;
    private readonly IYmlParser _ymlParser;

    public OfferService(DataContext dataContext, IYmlParser ymlParser)
    {
        _dataContext = dataContext;
        _ymlParser = ymlParser;
    }

    public async Task UnloadOffersByLink()
    {
        Console.WriteLine("Start unload offers");
        var suppliers =  await GetAvailableSuppliersByLinkAsync();
        if (suppliers == null)
            return;

        foreach (var supplier in suppliers.Where(o => !string.IsNullOrEmpty(o.YmlLink)))
        {
            Console.Write($"Supplier - {supplier.PublicName} ");
            try
            {
                var ymlCatalog = await GetYmlByLinkAsync(supplier.YmlLink!);
                var offers = _ymlParser.Parse(ymlCatalog, supplier.Id).ToList();
                var existingOffers = _dataContext.Offers.Where(o => o.SupplierId == supplier.Id);
                _dataContext.RemoveRange(existingOffers);
                _dataContext.AddRange(offers);
                supplier.OffersUpdatedAtUtc = DateTime.UtcNow;
                await _dataContext.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }

            Console.WriteLine("updated");
        }
    }

    private async Task<IEnumerable<SupplierSettings>?> GetAvailableSuppliersByLinkAsync()
    {
        var now = DateTime.Now;

        var refreshTimes = await _dataContext.AvailableYmlRefreshTimes.ToListAsync();
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
        return await _dataContext.SupplierSettings
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