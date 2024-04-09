namespace Backend.Core.Exceptions.ServiceExceptions;

public class UserAlreadyExistsException : ServiceException
{
    public UserAlreadyExistsException() : base("Такий користувач вже існує")
    { }
}