using backend.Constants;
using Backend.Core.DTOs.User.Supplier.Link;
using Backend.Core.DTOs.User.Supplier.Tag;
using Backend.Core.Services.User.Supplier;
using backend.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User.Supplier;

[Authorize(Policy = AuthorizationPolicies.Supplier)]
[Route("api/suppliers/tags")]
public class TagController : Controller
{
    private readonly TagService _tagService;

    public TagController(TagService tagService)
    {
        _tagService = tagService;
    }

    [HttpPost("add")]
    public async Task Add([FromBody] RequestBody<TagDto> body)
    {
        await _tagService.Add(User.Identity!.GetId(), body.Content);
    }

    [HttpPost("remove")]
    public async Task Remove([FromBody] RequestBody<int> body)
    {
        await _tagService.Remove(User.Identity!.GetId(), body.Content);
    }

    [HttpPost("update")]
    public async Task Update([FromBody] RequestBody<UpdateTagDto> body)
    {
        await _tagService.Update(User.Identity!.GetId(), body.Content);
    }

    [HttpGet("{id}")]
    public async Task<IEnumerable<TagDto>> GetAllOf(int id)
    {
        return await _tagService.GetAllOfSupplier(id);
    }
}