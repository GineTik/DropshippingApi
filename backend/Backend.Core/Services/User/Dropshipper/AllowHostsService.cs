using AutoMapper;
using Backend.Core.DTOs.User.Dropshipper.AllowHost;
using Backend.Core.DTOs.User.Dropshipper.ApiKey;
using Backend.Core.EF;
using Backend.Core.Entities;
using Backend.Core.Entities.User.Dropshipper;
using Backend.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Dropshipper;

public class AllowHostsService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public AllowHostsService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public async Task<IEnumerable<AllowHostDto>> GetAll(int userId)
    {
        var allowHosts = await _dataContext.AllowHosts.Where(k => k.UserId == userId).ToListAsync();
        return allowHosts.Select(host => _mapper.Map<AllowHostDto>(host));
    }
    
    public async Task Create(int userId, CreateAllowHostDto dto)
    {
        var allowHost = _mapper.Map<AllowHost>(dto);
        allowHost.UserId = userId;
        _dataContext.AllowHosts.Add(allowHost);
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Update(int userId, UpdateAllowHostDto dto)
    {
        var allowHost = await _dataContext.AllowHosts.FirstOrDefaultAsync(k => k.UserId == userId && k.Host == dto.OldHost);
        // TODO: create exception
        if (allowHost == null) throw new Exception();
        
        allowHost.Name = dto.Name;
        allowHost.Description = dto.Description;
        allowHost.Host = dto.NewHost;
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Delete(int userId, DeleteAllowHostDto dto)
    {
        var allowHost = await _dataContext.AllowHosts.FirstOrDefaultAsync(k => k.UserId == userId && k.Host == dto.Host);
        // TODO: create exception
        if (allowHost == null) throw new Exception();
        
        _dataContext.Remove(allowHost);
        await _dataContext.SaveChangesAsync();
    }
}