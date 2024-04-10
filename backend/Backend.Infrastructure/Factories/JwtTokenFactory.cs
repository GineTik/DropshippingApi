using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Core.Entities.User;
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
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            // TODO: rewrite 
            new Claim(ClaimTypes.Role, user.UserRoles.Any(o => o.RoleId == (int)Roles.Dropshipper) 
                ? Roles.Dropshipper.ToString() : Roles.Supplier.ToString())
        };

        return new JwtTokens
        {
            AccessToken = Create(claims, DateTime.UtcNow.Add(TimeSpan.FromMinutes(
                int.Parse(_configuration.GetSection("JWT:AccessExpiresMinutes").Value!)
            ))),
            RefreshToken = Create(claims, DateTime.UtcNow.Add(TimeSpan.FromDays(
                int.Parse(_configuration.GetSection("JWT:RefreshExpiresDays").Value!)                
            )))
        };
    }

    public bool Validate(string token, out int userId)
    {
        try
        {
            var claimsPrincipal = new JwtSecurityTokenHandler().ValidateToken(token, CreateValidationOptions(), out _);
            var claimsIdentity = claimsPrincipal.Identity as ClaimsIdentity;
            var claim = claimsIdentity!.FindFirst(ClaimTypes.NameIdentifier);
            userId = int.Parse(claim!.Value);
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            userId = 0;
            return false;
        }
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
   
   private string Create(IEnumerable<Claim> claims, DateTime expires)
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