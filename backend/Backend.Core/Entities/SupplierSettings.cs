using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Core.Entities;

public class SupplierSettings
{
    public int Id { get; set; }
    public required string PublicName { get; set; }
    public required string ApiName { get; set; }
    public bool Searchable { get; set; }
    public YmlLoadType YmlLoadType { get; set; }
    public string YmlLink { get; set; } = null!;
    public virtual YmlLinkRefreshTime RefreshTime { get; set; } = null!;
    [ForeignKey("AvailableYmlRefreshTimes")]
    public int RefreshTimeId { get; set; }
}

public enum YmlLoadType
{
    File,
    Link
}