using Backend.Core.Interfaces;

namespace Backend.Infrastructure.Factories;

public class MailSender : IMailSender
{
    public void SendConfirmationCode(string email, int confirmationCode)
    {
        Console.WriteLine(confirmationCode);
    }
}