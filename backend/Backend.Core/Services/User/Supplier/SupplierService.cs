using AutoMapper;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.EF;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User.Supplier;

public class SupplierService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public SupplierService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
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
            Suppliers = suppliers.Select(s => _mapper.Map<SupplierSettingsDto>(s))
        };
    }

    public async Task<SupplierSettingsDto> GetSupplier(int id)
    {
        var supplier = await _dataContext.SupplierSettings.FirstOrDefaultAsync(s => s.Id == id);
        return _mapper.Map<SupplierSettingsDto>(supplier);
    }
}