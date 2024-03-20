using AutoMapper;
using Backend.Core.DTOs.User.Dropshipper.ApiKey;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Dropshipper;

public class ApiKeysService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IApiKeyFactory _apiKeyFactory;

    public ApiKeysService(DataContext dataContext, IMapper mapper, IApiKeyFactory apiKeyFactory)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _apiKeyFactory = apiKeyFactory;
    }

    public async Task<IEnumerable<ApiKeyDto>> GetAll(int userId)
    {
        var apiKeys = await _dataContext.ApiKeys.Where(k => k.UserId == userId).ToListAsync();
        return apiKeys.Select(k => _mapper.Map<ApiKeyDto>(k));
    }
    
    public async Task Create(CreateApiKeyDto dto)
    {
        var apiKey = _mapper.Map<ApiKey>(dto);
        apiKey.UserId = dto.UserId;
        apiKey.Key = _apiKeyFactory.Create();
        _dataContext.ApiKeys.Add(apiKey);
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Update(UpdateApiKeyDto dto)
    {
        var apiKey = await _dataContext.ApiKeys.FirstOrDefaultAsync(k => k.UserId == dto.UserId && k.Key == dto.Key);
        // TODO: create exception
        if (apiKey == null) throw new Exception();
        
        apiKey.Name = dto.Name;
        apiKey.Description = dto.Description;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Refresh(RefreshApiKeyDto dto)
    {
        var apiKey = await _dataContext.ApiKeys.FirstOrDefaultAsync(k => k.UserId == dto.UserId && k.Key == dto.Key);
        // TODO: create exception
        if (apiKey == null) throw new Exception();
        
        apiKey.Key = _apiKeyFactory.Create();
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Delete(DeleteApiKeyDto dto)
    {
        var apiKey = await _dataContext.ApiKeys.FirstOrDefaultAsync(k => k.UserId == dto.UserId && k.Key == dto.Key);
        // TODO: create exception
        if (apiKey == null) throw new Exception();
        
        _dataContext.Remove(apiKey);
        await _dataContext.SaveChangesAsync();
    }
}