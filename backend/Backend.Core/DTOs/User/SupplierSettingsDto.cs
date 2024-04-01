﻿namespace Backend.Core.DTOs.User;

public class SupplierSettingsDto
{
    public int Id { get; set; }
    public string PublicName { get; set; } = null!;
    public string ApiName { get; set; } = null!;
    public string? Description { get; set; } = null!;
    public bool Searchable { get; set; }
    public string YmlLoadType { get; set; } = null!;
    public string? YmlLink { get; set; } = null!;
    public int? RefreshTimeId { get; set; }
}