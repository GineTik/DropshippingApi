namespace Backend.Core.DTOs.User.Auth;

public class SuccessAuthDto
{
    public required string AccessToken { get; set; }
    public required string RefreshToken { get; set; }
    public required UserDto User { get; set; }
}