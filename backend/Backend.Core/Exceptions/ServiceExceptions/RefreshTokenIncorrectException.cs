namespace Backend.Core.Exceptions.ServiceExceptions;

public class RefreshTokenIncorrectException : ServiceException
{
    public RefreshTokenIncorrectException() : base("Refresh token not found")
    {
    }
}