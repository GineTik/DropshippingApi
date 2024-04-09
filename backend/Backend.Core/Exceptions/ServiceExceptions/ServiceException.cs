namespace Backend.Core.Exceptions.ServiceExceptions;

public class ServiceException : Exception
{
    public ServiceException(string message) : base(message)
    { }
}