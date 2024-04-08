using AutoMapper;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class SupplierInformationService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public SupplierInformationService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public async Task ChangePublicName(int userId, string publicName)
    {
        var settings = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        if (settings == null) throw new NotFoundSupplierSettingsException();
        
        settings.PublicName = publicName;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task ChangeApiName(int userId, string apiName)
    {
        var settings = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        if (settings == null) throw new NotFoundSupplierSettingsException();

        settings.ApiName = apiName;
        await _dataContext.SaveChangesAsync();   
    }
    
    public async Task ChangeDescription(int userId, string description)
    {
        var settings = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        if (settings == null) throw new NotFoundSupplierSettingsException();
        
        settings.Description = description;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task ChangeYmlType(int userId, string ymlType)
    {
        var settings = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        if (settings == null) throw new NotFoundSupplierSettingsException();
        
        var rightType = Enum.TryParse(ymlType, out YmlLoadTypes type);
        if (rightType == false) throw new Exception();
        
        settings.YmlLoadTypeId = (int)type;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task ChangeYmlCatalogLink(int userId, YmlCatalogLinkDto dto)
    {
        var settings = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        if (settings == null) throw new NotFoundSupplierSettingsException();
        
        var refreshTime = await _dataContext.AvailableYmlRefreshTimes.FirstOrDefaultAsync(rt => rt.Id == dto.RefreshTimeId);
        if (refreshTime == null) throw new Exception();
        
        settings.YmlLink = dto.Link;
        settings.RefreshTimeId = refreshTime.Id;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task<IEnumerable<RefreshTimeDto>> GetAvailableRefreshTimes()
    {
        return await _dataContext.AvailableYmlRefreshTimes.Select(rt => _mapper.Map<RefreshTimeDto>(rt)).ToListAsync();
    }
    
    public Task<IEnumerable<string>> GetAvailableYmlLoadTypes()
    {
        return Task.FromResult(Enum.GetValues(typeof(YmlLoadTypes)).Cast<YmlLoadTypes>().Select(t => t.ToString()));
    }
}