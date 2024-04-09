namespace Backend.Core.DTOs.User.Supplier;

public class SuppliersPageDto
{
    public int TotalSuppliers { get; set; }
    public int TotalPages { get; set; }
    public int PageSize { get; set; }
    public int Page { get; set; }
    public IEnumerable<SupplierSettingsDto> Suppliers { get; set; } = null!;
}