using backend.Constants;
using Backend.Core.DTOs.User;
using Backend.Core.DTOs.User.Supplier;
using Backend.Core.Services.User.Supplier;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Supplier;

[Route("api/suppliers")]
public class SupplierController : Controller
{
    private readonly SupplierService _supplierService;

    public SupplierController(SupplierService supplierService)
    {
        _supplierService = supplierService;
    }

    [HttpGet]
    public async Task<SuppliersPageDto> GetSuppliersPage(int page = 0)
    {
        return await _supplierService.GetSuppliersPage(page, SuppliersConstants.PageSize);
    }
    
    [HttpGet("{id}")]
    public async Task<SupplierSettingsDto> GetSupplier(int id)
    {
        return await _supplierService.GetSupplier(id);
    }
}