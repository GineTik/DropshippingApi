using Backend.Core.DTOs.User.Dropshipper.AllowHost;
using Backend.Core.DTOs.User.Dropshipper.ApiKey;
using Backend.Core.Entities;
using Backend.Core.Services.User.Dropshipper;
using backend.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Dropshipper;

[Route("api/user/api-keys")]
public class ApiKeysController : Controller
{
    private readonly ApiKeysService _apiKeysService;

    public ApiKeysController(ApiKeysService apiKeysService)
    {
        _apiKeysService = apiKeysService;
    }

    [HttpGet]
    public async Task<IEnumerable<ApiKeyDto>> GetAll()
    {
        return await _apiKeysService.GetAll(User.Identity!.GetId());
    }
    
    [HttpPost("create")]
    public async Task Create([FromBody] CreateApiKeyDto dto)
    {
        await _apiKeysService.Create(User.Identity!.GetId(), dto);
    }
    
    [HttpPost("update")]
    public async Task Update([FromBody] UpdateApiKeyDto dto)
    {
        await _apiKeysService.Update(User.Identity!.GetId(), dto);
    }
    
    [HttpPost("delete")]
    public async Task Delete([FromBody] DeleteApiKeyDto dto)
    {
        await _apiKeysService.Delete(User.Identity!.GetId(), dto);
    }
    
    [HttpPost("refresh")]
    public async Task<ApiKeyDto> Refresh([FromBody] RefreshApiKeyDto dto)
    {
        return await _apiKeysService.Refresh(User.Identity!.GetId(), dto);
    }
}