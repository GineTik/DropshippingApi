using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Core.Entities.Users;

public class User
{
    public User()
    {
        
    }
    
    public int Id { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public int ConfirmationCode { get; set; }
    public int SettingsId { get; set; }

    public virtual ICollection<UserRole> UserRoles { get; set; } = null!;
}