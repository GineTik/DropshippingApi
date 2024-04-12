using FluentValidation.Results;
using Microsoft.EntityFrameworkCore.Query.Internal;

namespace Backend.Core.Exceptions.ServiceExceptions;

public class ServiceValidationException : ServiceException
{
    public ServiceValidationException(string message) : base(message)
    {
    }

    public ServiceValidationException(ValidationFailure error) : base(error.ErrorMessage)
    {
    }
}