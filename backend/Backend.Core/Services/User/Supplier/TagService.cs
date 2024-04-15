using AutoMapper;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.DTOs.User.Supplier.Tag;
using Backend.Core.EF;
using Backend.Core.Entities.User.Supplier;
using Backend.Core.Exceptions.ServiceExceptions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

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
        var supplier = await _dataContext.SupplierSettings.FirstOrDefaultAsync(o => o.UserId == userId);
        if (supplier == null) throw new UserNotExistsException();

        var tag = await _dataContext.Tags.FirstOrDefaultAsync(o => o.Name == dto.Name);
        if (tag == null)
        {
            _dataContext.Tags.Add(new Tag
            {
                Name = dto.Name, 
                SupplierSettings = new[] { supplier }
            });
        }
        else
        {
            tag.SupplierSettings.Add(supplier);
        }
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task Remove(int userId, int id)
    {
        var supplier = await _dataContext.SupplierSettings.FirstOrDefaultAsync(o => o.UserId == userId);
        if (supplier == null) throw new UserNotExistsException();
        
        var tag = await _dataContext.Tags.FirstOrDefaultAsync(o => o.Id == id);
        if (tag == null) throw new TagNotFoundException();
            
        tag.SupplierSettings.Remove(supplier);
        await _dataContext.SaveChangesAsync();
    }
    
    public async Task Update(int userId, UpdateTagDto dto)
    {
        var supplier = await _dataContext.SupplierSettings.FirstOrDefaultAsync(o => o.UserId == userId);
        if (supplier == null) throw new UserNotExistsException();
        
        _dataContext.Tags.Update(new Tag
        {
            Id = dto.Id,
            Name = dto.Name,
            SupplierSettings = new[] { supplier }
        });
        await _dataContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<TagDto>> GetAllOfSupplier(int supplierId)
    {
        var result = await _dataContext.Tags.Where(o => o.SupplierSettings.Any(o1 => o1.Id == supplierId)).ToListAsync();
        return result.Select(o => _mapper.Map<TagDto>(o)); 
    }
    
    public async Task<IEnumerable<TagDto>> GetVerifiedOfSupplier(int supplierId)
    {
        var result = await _dataContext.Tags.Where(o => 
            o.Verified == true && 
            o.SupplierSettings.Any(o1 => o1.Id == supplierId))
        .ToListAsync();
        return result.Select(o => _mapper.Map<TagDto>(o)); 
    }

    public async Task SetVerified(int id)
    {
        var tag = await _dataContext.Tags.FirstOrDefaultAsync(o => o.Id == id);
        if (tag == null) throw new TagNotFoundException();

        tag.Verified = true;
        await _dataContext.SaveChangesAsync();
    }
}