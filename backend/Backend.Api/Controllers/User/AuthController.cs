using backend.Constants;
using Backend.Core.DTOs.User.Auth;
using Backend.Core.Services;
using Backend.Core.Services.User;
using backend.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.User;

[Route("api/auth")]
public class AuthController : Controller
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<SuccessAuthDto> Login([FromBody] LoginDto dto)
    {
        var result = await _authService.Login(dto);
        AddRefreshTokenCookie(result);
        return result;
    }
    
    [HttpPost("registration-dropshipper")]
    public async Task<SuccessAuthDto> RegistrationDropshipper([FromBody] RegistrationDropshipperDto dto)
    {
        var result = await _authService.RegistrationDropshipper(dto);
        AddRefreshTokenCookie(result);
        return result;
    }
    
    [HttpPost("registration-supplier")]
    public async Task<SuccessAuthDto> RegistrationSupplier([FromBody] RegistrationSupplierDto dto)
    {
        var result = await _authService.RegistrationSupplier(dto);
        AddRefreshTokenCookie(result);
        return result;
    }
    
    [Authorize]
    [HttpPost("refresh")]
    public async Task<SuccessAuthDto> Refresh()
    {
        _ = Request.Cookies[CookieKeys.RefreshToken];
        if (Request.Cookies[CookieKeys.RefreshToken] == null)
            throw new BadHttpRequestException("Refresh token not found");

        var result = await _authService.Refresh(User.Identity!.GetId(), Request.Cookies[CookieKeys.RefreshToken]!);
        AddRefreshTokenCookie(result);
        return result;
    }

    private void AddRefreshTokenCookie(SuccessAuthDto result)
    {
        Response.Cookies.Append(CookieKeys.RefreshToken, result.RefreshToken, new CookieOptions
        {
            Expires = DateTime.Now.AddDays(30),
            HttpOnly = true,
            Path = "/"
        });
    }

    [Authorize]
    [HttpPost("activate/{confirmationCode}")]
    public async Task ConfirmEmail(int confirmationCode)
    {
        await _authService.ConfirmEmail(User.Identity!.GetId(), confirmationCode);
    }

    [Authorize]
    [HttpPost("logout")]
    public async Task Logout()
    {
        Response.Cookies.Delete(CookieKeys.RefreshToken);
        await Task.CompletedTask;
    }
}