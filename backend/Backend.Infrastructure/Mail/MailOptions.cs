namespace Backend.Infrastructure.Mail;

public class MailOptions
{
    public string EmailName { get; set; } = null!;
    public string EmailAddress { get; set; }= null!;
    public string Host { get; set; }= null!;
    public int Port { get; set; }
    public string Password { get; set; } = null!;
}