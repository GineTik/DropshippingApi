using System.Reflection;
using Backend.Core.EF;
using Backend.Core.Services;
using Backend.Core.Services.User;
using Backend.Core.Services.User.Dropshipper;
using Backend.Core.Services.User.Supplier;
using Backend.Core.Sheduler;
using Backend.Core.Validators.User;
using Coravel;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Core;

public static class ServiceExtension
{
    public static IServiceCollection AddCore(this IServiceCollection services)
    {
        var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();
        services.AddTransient<AuthService>();
        services.AddTransient<ApiKeysService>();
        services.AddTransient<AllowHostsService>();
        services.AddTransient<UserService>();
        services.AddTransient<SupplierInformationService>();
        services.AddTransient<SupplierService>();
        services.AddTransient<OfferUnloaderService>();
        services.AddTransient<LinkService>();
        services.AddTransient<TagService>();
        services.AddTransient<OfferService>();
        services.AddDbContext<DataContext>(options => options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Default")));
        services.AddDbContextFactory<DataContext>(options => options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Default")), ServiceLifetime.Scoped);
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddScheduler();
        services.AddTransient<UnloadOfferJob>();
        services.AddValidatorsFromAssemblyContaining<LoginValidator>();
        return services;
    }
}