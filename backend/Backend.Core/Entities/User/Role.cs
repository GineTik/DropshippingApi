namespace Backend.Core.Entities.User;

public class Role
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;

    public virtual IEnumerable<UserRole> UserRoles { get; set; } = null!;
}

public enum Roles
{
    Dropshipper = 1,
    Supplier = 2,
    Owner = 3,
    UnconfirmedEmail = 4,
}