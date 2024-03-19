using System.Net.Mime;
using System.Reflection;
using System.Text;
using Backend.Core;
using Backend.Core.Exceptions.ServiceExceptions;
using Backend.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthorization();
builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme,
        options =>  options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration.GetSection("JWT:ISSUER").Value,
            ValidateAudience = true,
            ValidAudience = builder.Configuration.GetSection("JWT:AUDIENCE").Value,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                builder.Configuration.GetSection("JWT:KEY").Value!
            )),
            ValidateIssuerSigningKey = true,
        });
builder.Services.AddControllers();

builder.Services.AddCore();
builder.Services.AddInfrastructure();

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy(name: "Default",
//         policy  =>
//         {
//             policy.WithOrigins("http://localhost:3000");
//             policy.AllowCredentials();
//         });
// });


var app = builder.Build();

app.UseCors(policy  =>
{
    policy.WithOrigins("http://localhost:3000");
    policy.AllowCredentials();
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
});

app.UseExceptionHandler(exceptionHandlerApp =>
{
    exceptionHandlerApp.Run(async context =>
    {
        //context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        //context.Response.ContentType = MediaTypeNames.Text.Plain;

        var exceptionHandlerPathFeature =
            context.Features.Get<IExceptionHandlerPathFeature>();

        Console.WriteLine(exceptionHandlerPathFeature?.Error.Message);

        if (exceptionHandlerPathFeature?.Error is ServiceException serviceException)
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 400,
                Message = serviceException.Message
            });
        }
    });
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();