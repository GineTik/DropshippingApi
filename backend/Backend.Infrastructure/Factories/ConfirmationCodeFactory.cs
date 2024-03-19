using Backend.Core.Interfaces.ConfirmationCode;

namespace Backend.Infrastructure.Factories;

public class ConfirmationCodeFactory : IConfirmationCodeFactory
{
    public int Create()
    {
        var generator = new Random();
        return generator.Next(100000, 1000000);
    }
}