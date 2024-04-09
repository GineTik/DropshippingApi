namespace Backend.Core.DTOs.User.Auth;

public class ChangePasswordDto
{
    public required string ConfirmationCode { get; set; }
    public required string NewPassword { get; set; }
}