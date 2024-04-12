using Backend.Core.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Backend.Infrastructure.Mail;

public class MailSender : IMailSender
{
    private MailOptions _options;

    public MailSender(IOptions<MailOptions> options)
    {
        _options = options.Value;
    }

    public void SendConfirmationCode(string email, int confirmationCode)
    {
        Send(email, "Підтвердіть створення аккаунту", $"Ваш код для підтвердження: {confirmationCode}");
    }

    private void Send(string email, string subject, string content)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(_options.EmailName, _options.EmailAddress));
        message.To.Add(new MailboxAddress("", email));
        message.Subject = subject;
        message.Body = new TextPart("plain") { Text = content };

        using var client = new SmtpClient();
        client.ServerCertificateValidationCallback = (s,c,h,e) => true;
        client.Connect(_options.Host, _options.Port, SecureSocketOptions.StartTls);
        client.Authenticate(_options.EmailAddress, _options.Password);
        client.Send(message);
        client.Disconnect(true);
    }
}