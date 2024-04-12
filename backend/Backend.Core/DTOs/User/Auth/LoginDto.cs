using System.ComponentModel.DataAnnotations;

namespace Backend.Core.DTOs.User.Auth;

public class LoginDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}