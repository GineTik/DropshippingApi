using System.Reflection;
using Backend.Core.EF;
using Backend.Core.Services;
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
        services.AddDbContext<DataContext>(options => options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Local")));
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        return services;
    }
}