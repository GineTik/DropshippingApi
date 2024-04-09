namespace Backend.Core.Interfaces.JwtTokenFactory;

public class JwtTokens
{
    public required string AccessToken { get; set; }
    public required string RefreshToken { get; set; }
}