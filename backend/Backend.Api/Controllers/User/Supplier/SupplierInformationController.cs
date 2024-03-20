using Backend.Core.DTOs.User.Supplier;
using Backend.Core.Services.User.Supplier;
using backend.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Supplier;

[Authorize]
[Route("api/supplier")]
public class SupplierInformationController : Controller
{
    private readonly SupplierInformationService _supplierInformationService;

    public SupplierInformationController(SupplierInformationService supplierInformationService)
    {
        _supplierInformationService = supplierInformationService;
    }

    [HttpPost("change-public-name")]
    public async Task ChangePublicName([FromBody] ChangeSupplierFieldDto dto)
    {
        await _supplierInformationService.ChangePublicName(User.Identity!.GetId(), dto.Content);
    }
    
    [HttpPost("change-api-name")]
    public async Task ChangeApiName([FromBody] ChangeSupplierFieldDto dto)
    {
        await _supplierInformationService.ChangeApiName(User.Identity!.GetId(), dto.Content);
    }
    
    [HttpPost("change-description")]
    public async Task ChangeDescription([FromBody] ChangeSupplierFieldDto dto)
    {
        await _supplierInformationService.ChangeDescription(User.Identity!.GetId(), dto.Content);
    }
    
    [HttpPost("change-yml-type")]
    public async Task ChangeYmlType([FromBody] ChangeSupplierFieldDto dto)
    {
        await _supplierInformationService.ChangeYmlType(User.Identity!.GetId(), dto.Content);
    }
    
    [HttpPost("change-yml-catalog-link")]
    public async Task ChangeYmlCatalogLink([FromBody] YmlCatalogLinkDto dto)
    {
        await _supplierInformationService.ChangeYmlCatalogLink(User.Identity!.GetId(), dto);
    }
    
    [HttpGet("available-refresh-times")]
    public async Task<IEnumerable<RefreshTimeDto>> GetAvailableRefreshTimes()
    {
        return await _supplierInformationService.GetAvailableRefreshTimes();
    }
    
    [HttpGet("available-yml-load-types")]
    public async Task<IEnumerable<string>> GetAvailableYmlLoadTypes()
    {
        return await _supplierInformationService.GetAvailableYmlLoadTypes();
    }
}