namespace Backend.Core.DTOs.User.Supplier;

public class ChangeSupplierFieldDto<T>
{
    public required T Content { get; set; }
}