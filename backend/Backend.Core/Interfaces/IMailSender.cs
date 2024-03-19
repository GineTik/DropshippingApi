namespace Backend.Core.Interfaces;

public interface IMailSender
{
    public void SendConfirmationCode(string email, int confirmationCode);
}