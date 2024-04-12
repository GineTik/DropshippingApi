using System.ComponentModel.DataAnnotations;

namespace Backend.Core.DTOs.User.Auth;

public class RegistrationSupplierDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string ApiName { get; set; }
    public required string PublicName { get; set; }
}