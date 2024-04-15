namespace Backend.Core.Exceptions.ServiceExceptions;

public class LinkNotFoundException : ServiceException
{
    public LinkNotFoundException() : base("Такої силки не існує")
    {
    }
}