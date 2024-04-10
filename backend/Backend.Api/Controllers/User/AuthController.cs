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
        AddRefreshTokenToCookie(result);
        return result;
    }
    
    [HttpPost("registration-dropshipper")]
    public async Task<SuccessAuthDto> RegistrationDropshipper([FromBody] RegistrationDropshipperDto dto)
    {
        var result = await _authService.RegistrationDropshipper(dto);
        AddRefreshTokenToCookie(result);
        return result;
    }
    
    [HttpPost("registration-supplier")]
    public async Task<SuccessAuthDto> RegistrationSupplier([FromBody] RegistrationSupplierDto dto)
    {
        var result = await _authService.RegistrationSupplier(dto);
        AddRefreshTokenToCookie(result);
        return result;
    }
    
    [HttpPost("refresh")]
    public async Task<SuccessAuthDto> Refresh()
    {
        if (Request.Cookies[CookieKeys.RefreshToken] == null)
            throw new BadHttpRequestException("Refresh token not found");

        var result = await _authService.Refresh(Request.Cookies[CookieKeys.RefreshToken]!);
        AddRefreshTokenToCookie(result);
        return result;
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
    
    private void AddRefreshTokenToCookie(SuccessAuthDto result)
    {
        Response.Cookies.Append(CookieKeys.RefreshToken, result.RefreshToken, new CookieOptions
        {
            Expires = DateTime.Now.AddDays(30),
            HttpOnly = true,
            Path = "/"
        });
    }
}