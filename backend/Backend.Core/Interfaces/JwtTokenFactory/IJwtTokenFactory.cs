using Backend.Core.Entities;
using Backend.Core.Entities.User;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Core.Interfaces.JwtTokenFactory;

public interface IJwtTokenFactory
{
    public JwtTokens CreateTokens(User user);
    public TokenValidationParameters CreateValidationOptions();
}