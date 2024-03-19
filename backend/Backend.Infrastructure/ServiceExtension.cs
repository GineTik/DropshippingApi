using Backend.Core.Interfaces;
using Backend.Core.Interfaces.ConfirmationCode;
using Backend.Core.Interfaces.JwtTokenFactory;
using Backend.Infrastructure.Factories;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Infrastructure;

public static class ServiceExtension
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddTransient<IJwtTokenFactory, JwtTokenFactory>();
        services.AddSingleton<IConfirmationCodeFactory, ConfirmationCodeFactory>();
        services.AddSingleton<IPasswordHasher, PasswordHasher>();
        services.AddSingleton<IMailSender, MailSender>();
        return services;
    }
}