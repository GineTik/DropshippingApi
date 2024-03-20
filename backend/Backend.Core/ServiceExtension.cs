using System.Reflection;
using Backend.Core.EF;
using Backend.Core.Services;
using Backend.Core.Services.User;
using Backend.Core.Services.User.Dropshipper;
using Backend.Core.Services.User.Supplier;
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
        services.AddDbContext<DataContext>(options => options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Local")));
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        return services;
    }
}