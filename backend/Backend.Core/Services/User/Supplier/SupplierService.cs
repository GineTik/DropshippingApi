using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.EF;
using Backend.Core.Entities.User.Supplier;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class SupplierService
{
    private readonly DataContext _dataContext;
    private readonly LinkService _linkService;
    private readonly IMapper _mapper;

    public SupplierService(DataContext dataContext, IMapper mapper, LinkService linkService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _linkService = linkService;
    }

    public async Task<SuppliersPageDto> GetSuppliersPage(int page, int pageSize)
    {
        if (page < 1) 
            page = 1;
        
        var totalSuppliers = await _dataContext.SupplierSettings.Where(s => s.Searchable == true).CountAsync();
        var totalPages = totalSuppliers / pageSize + (totalSuppliers % pageSize == 0 ? 0 : 1);

        if (page > totalPages)
            page = totalPages;
        
        var suppliers = await _dataContext.SupplierSettings.Where(s => s.Searchable == true)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        
        return new SuppliersPageDto
        {
            TotalSuppliers = totalSuppliers,
            TotalPages = totalPages,
            Page = page,
            PageSize = suppliers.Count,
            Suppliers = suppliers.Select(o => _mapper.Map<SupplierSettingsDto>(o))
        };
    }

    public async Task<SupplierSettingsDto> GetSupplier(int id)
    {
        var supplier = await _dataContext.SupplierSettings.FirstOrDefaultAsync(o => o.Id == id);
        if (supplier == null) throw new Exception("GetSupplier error");

        return _mapper.Map<SupplierSettingsDto>(supplier);
    }
}