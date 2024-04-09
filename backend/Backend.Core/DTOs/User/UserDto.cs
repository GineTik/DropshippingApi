using Backend.Core.DTOs.User.Supplier;
using Backend.Core.Entities;

namespace Backend.Core.DTOs.User;

public class UserDto
{
    public required string Email { get; set; }
    public required bool EmailIsConfirmed { get; set; }
    public required IEnumerable<string> Roles { get; set; }
    public DropshipperSettingsDto? DropshipperSettings { get; set; }
    public SupplierSettingsDto? SupplierSettings { get; set; }
}