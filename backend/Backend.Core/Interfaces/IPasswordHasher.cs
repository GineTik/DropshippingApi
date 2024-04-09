namespace Backend.Core.Interfaces;

public interface IPasswordHasher
{
    public string Hash(string password);
    public bool Compare(string hash, string password);
}