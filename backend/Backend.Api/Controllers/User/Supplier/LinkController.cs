using backend.Constants;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.Services.User.Supplier;
using backend.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Supplier;

[Authorize(Policy = AuthorizationPolicies.Supplier)]
[Route("api/suppliers/links")]
public class LinkController : Controller
{
    private readonly LinkService _linkService;

    public LinkController(LinkService linkService)
    {
        _linkService = linkService;
    }

    [HttpPost("add")]
    public async Task Add([FromBody] RequestBody<AddLinkDto> body)
    {
        await _linkService.Add(User.Identity!.GetId(), body.Content);
    }

    [HttpPost("remove")]
    public async Task Remove([FromBody] RequestBody<int> body)
    {
        await _linkService.Remove(User.Identity!.GetId(), body.Content);
    }

    [HttpPost("update")]
    public async Task Update([FromBody] RequestBody<UpdateLinkDto> body)
    {
        await _linkService.Update(User.Identity!.GetId(), body.Content);
    }

    [HttpGet("{id}")]
    public async Task<IEnumerable<GetLinkDto>> GetAllOf(int id)
    {
        return await _linkService.GetAllOfSupplier(id);
    }
}