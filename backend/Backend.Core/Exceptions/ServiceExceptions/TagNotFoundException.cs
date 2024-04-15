namespace Backend.Core.Exceptions.ServiceExceptions;

public class TagNotFoundException : ServiceException
{
    public TagNotFoundException() : base("Такого тега не існує")
    {
    }
}