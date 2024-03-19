namespace Backend.Core.DTOs.User;

public class SupplierSettingsDto
{
    public required string PublicName { get; set; }
    public required string ApiName { get; set; }
    public required bool Searchable { get; set; }
    public required string YmlLoadType { get; set; }
    public required string YmlLink { get; set; }
    public required string RefreshTime { get; set; }
}