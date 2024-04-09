using Backend.Core.Interfaces;

namespace Backend.Infrastructure.Hashers;

public class PasswordHasher : IPasswordHasher
{
    public string Hash(string password)
    {
        return password + "__hashed";
    }

    public bool Compare(string hash, string password)
    {
        return hash == Hash(password);
    }
}