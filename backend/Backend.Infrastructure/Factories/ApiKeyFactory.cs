using System.Security.Cryptography;
using Backend.Core.Interfaces;
using Backend.Core.Options;
using Microsoft.Extensions.Options;

namespace Backend.Infrastructure.Factories;

public class ApiKeyFactory : IApiKeyFactory
{
    private readonly ApiKeyOptions _options;

    public ApiKeyFactory(IOptions<ApiKeyOptions> options)
    {
        _options = options.Value;
    }

    public string Create()
    {
        return Guid.NewGuid().ToString();
    }
}