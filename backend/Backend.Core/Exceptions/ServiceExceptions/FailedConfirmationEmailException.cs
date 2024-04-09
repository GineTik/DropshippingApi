namespace Backend.Core.Exceptions.ServiceExceptions;

public class FailedConfirmationEmailException : ServiceException
{
    public FailedConfirmationEmailException() : base("Confirmation code or user id incorrect")
    {
    }
}