using AutoMapper;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.DTOs.User.Supplier.Tag;
using Backend.Core.EF;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class TagService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public TagService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }

    public async Task Add(int userId, TagDto dto)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Tags.Add(new Tag
        {
            Name = dto.Name,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }

    public async Task Remove(int userId, int id)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Tags.Remove(new Tag
        {
            Id = id,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Update(int userId, UpdateTagDto dto)
    {
        var user = await _dataContext.Users.FirstOrDefaultAsync(o => o.Id == userId);
        if (user == null) throw new UserNotExistsException();
        
        _dataContext.Tags.Update(new Tag
        {
            Id = dto.Id,
            Name = dto.Name,
            SupplierSettingsId = user.SettingsId
        });
        await _dataContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<TagDto>> GetAllOfSupplier(int supplierId)
    {
        var result = await _dataContext.Tags.Where(o => o.SupplierSettingsId == supplierId).ToListAsync();
        return result.Select(o => _mapper.Map<TagDto>(o));
    }
}