using Backend.Core.Interfaces;
using Backend.Core.Interfaces.ConfirmationCode;
using Backend.Core.Interfaces.JwtTokenFactory;
using Backend.Core.Options;
using Backend.Infrastructure.Factories;
using Backend.Infrastructure.Hashers;
using Backend.Infrastructure.Mail;
using Backend.Infrastructure.Parsers;
using Backend.Infrastructure.Parsers.YmlParser;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Infrastructure;

public static class ServiceExtension
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        var configuration = services.BuildServiceProvider().GetRequiredService<ConfigurationManager>();
        services.AddTransient<IJwtTokenFactory, JwtTokenFactory>();
        services.AddSingleton<IConfirmationCodeFactory, ConfirmationCodeFactory>();
        services.AddSingleton<IPasswordHasher, PasswordHasher>();
        services.AddSingleton<IMailSender, MailSender>();
        services.AddSingleton<IApiKeyFactory, ApiKeyFactory>();
        services.AddSingleton<IYmlParser, YmlParser>();
        services.Configure<ApiKeyOptions>(configuration.GetSection(ApiKeyOptions.Name));
        services.Configure<MailOptions>(configuration.GetSection("Mail"));
        return services;
    }
}