using Backend.Core.DTOs.User.Dropshipper.AllowHost;
using Backend.Core.Entities;
using Backend.Core.Services.User.Dropshipper;
using backend.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Dropshipper;

[Route("api/user/allowed-hosts")]
public class AllowHostsController : Controller
{
    private readonly AllowHostsService _allowHostsService;

    public AllowHostsController(AllowHostsService allowHostsService)
    {
        _allowHostsService = allowHostsService;
    }

    [HttpGet]
    public async Task<IEnumerable<AllowHostDto>> GetAll()
    {
        return await _allowHostsService.GetAll(User.Identity!.GetId());
    }
    
    [HttpPost("add")]
    public async Task Create([FromBody] CreateAllowHostDto dto)
    {
        await _allowHostsService.Create(User.Identity!.GetId(), dto);
    }
    
    [HttpPost("update")]
    public async Task Update([FromBody] UpdateAllowHostDto dto)
    {
        await _allowHostsService.Update(User.Identity!.GetId(), dto);
    }
    
    [HttpPost("delete")]
    public async Task Delete([FromBody] DeleteAllowHostDto dto)
    {
        await _allowHostsService.Delete(User.Identity!.GetId(), dto);
    }
}