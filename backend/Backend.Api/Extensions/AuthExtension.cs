using System.Text;
using backend.Constants;
using Backend.Core.Entities.User;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

namespace backend.Extensions;

public static class AuthExtension
{
    public static void AddFullAuth(this IServiceCollection services)
    {
        var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();
        
        services.AddAuthorization(options =>
        {
            options.AddPolicy(AuthorizationPolicies.Dropshipper, new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .RequireRole(Roles.Dropshipper.ToString())
                .Build());
            
            options.AddPolicy(AuthorizationPolicies.Supplier, new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .RequireRole(Roles.Supplier.ToString())
                .Build());
        });
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme,
            options =>  options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = configuration.GetSection("JWT:ISSUER").Value,
            ValidateAudience = true,
            ValidAudience = configuration.GetSection("JWT:AUDIENCE").Value,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                configuration.GetSection("JWT:KEY").Value!
            )),
            ValidateIssuerSigningKey = true,
        });
    }
}