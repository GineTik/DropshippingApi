namespace Backend.Core.Options;

public class ApiKeyOptions
{
    public const string Name = "ApiKey"; 
    
    public int LengthOfKey { get; set; }
    public string Prefix { get; set; } = null!;
    public int NumberOfSecureBytesToGenerate { get; set; }
}