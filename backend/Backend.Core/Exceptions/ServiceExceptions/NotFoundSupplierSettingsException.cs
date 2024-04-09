namespace Backend.Core.Exceptions.ServiceExceptions;

public class NotFoundSupplierSettingsException : ServiceException
{
    public NotFoundSupplierSettingsException() : base("Not found supplier settings")
    {
    }
}