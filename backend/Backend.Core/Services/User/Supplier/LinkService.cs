using AutoMapper;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.EF;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class LinkService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public LinkService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public async Task Add(int userId, AddLinkDto dto)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Links.Add(new Link
        {
            Name = dto.Name,
            Url = dto.Url,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }

    public async Task Remove(int userId, int linkId)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Links.Remove(new Link
        {
            Id = linkId,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Update(int userId, UpdateLinkDto dto)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Links.Update(new Link
        {
            Id = dto.Id,
            Name = dto.Name,
            Url = dto.Url,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<GetLinkDto>> GetAllOfSupplier(int supplierId)
    {
        var result = await _dataContext.Links.Where(o => o.SupplierSettingsId == supplierId).ToListAsync();
        return result.Select(o => _mapper.Map<GetLinkDto>(o));
    }
}