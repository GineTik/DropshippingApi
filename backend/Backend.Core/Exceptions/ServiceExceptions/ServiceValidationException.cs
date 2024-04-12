using FluentValidation.Results;
using Microsoft.EntityFrameworkCore.Query.Internal;

namespace Backend.Core.Exceptions.ServiceExceptions;

public class SupplierValidationException : ServiceException
{
    public SupplierValidationException(string message) : base(message)
    {
    }

    public SupplierValidationException(ValidationFailure error) : base(error.ErrorMessage)
    {
    }
}