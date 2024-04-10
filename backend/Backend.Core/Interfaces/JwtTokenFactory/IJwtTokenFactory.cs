using System.Security.Claims;
using Backend.Core.Entities.User;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Core.Interfaces.JwtTokenFactory;

public interface IJwtTokenFactory
{
    public JwtTokens CreateTokens(User user);
    public bool Validate(string token, out int userId);
    public TokenValidationParameters CreateValidationOptions();
}