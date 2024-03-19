using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Core.Entities;
using Backend.Core.Interfaces.JwtTokenFactory;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Infrastructure.Factories;

public class JwtTokenFactory : IJwtTokenFactory
{
    private readonly IConfiguration _configuration;

    public JwtTokenFactory(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    public JwtTokens CreateTokens(User user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
        };
        
        return new JwtTokens
        {
            AccessToken = create(claims, DateTime.UtcNow.Add(TimeSpan.FromMinutes(15))),
            RefreshToken = create(claims, DateTime.UtcNow.Add(TimeSpan.FromDays(30)))
        };
    }

   public TokenValidationParameters CreateValidationOptions()
    {
        return new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = _configuration.GetSection("JWT:ISSUER").Value,
            ValidateAudience = true,
            ValidAudience = _configuration.GetSection("JWT:AUDIENCE").Value,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("JWT:KEY").Value!
            )),
            ValidateIssuerSigningKey = true,
        };
    }
   
   private string create(IEnumerable<Claim> claims, DateTime expires)
   {
       return new JwtSecurityTokenHandler().WriteToken(new JwtSecurityToken(
           issuer: _configuration.GetSection("JWT:ISSUER").Value,
           audience: _configuration.GetSection("JWT:AUDIENCE").Value,
           claims: claims,
           expires: expires,
           signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
               _configuration.GetSection("JWT:KEY").Value!
           )), SecurityAlgorithms.HmacSha256)
       ));
   }
}