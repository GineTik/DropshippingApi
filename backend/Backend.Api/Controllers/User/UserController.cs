using Backend.Core.Services.User;
using backend.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User;

[Route("api/user")]
public class UserController : Controller
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet("max-count")]
    public async Task<int> GetAll()
    {
        return await _userService.GetMaxLengthOfAllows(User.Identity!.GetId());
    }
}