namespace Backend.Core.Exceptions.ServiceExceptions;

public class UserNotExistsException : ServiceException
{
    public UserNotExistsException() : base("Почта або пароль невірний")
    { }
}