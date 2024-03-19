using Backend.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.EF;

public class DataContext : DbContext
{
    public required DbSet<User> Users { get; set; }
    public required DbSet<Role> Roles { get; set; }
    public required DbSet<UserRole> UserRoles { get; set; }
    public required DbSet<DropshipperSettings> DropshipperSettings { get; set; }
    public required DbSet<SupplierSettings> SupplierSettings { get; set; }
    public required DbSet<YmlLinkRefreshTime> AvailableYmlRefreshTimes { get; set; }
    
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var roles = Enum.GetValues(typeof(Roles)).Cast<Roles>().ToArray();
        modelBuilder.Entity<Role>().HasData(roles.Select(r => new Role
        {
            Id = (int)r,
            Name = r.ToString()
        }));
        base.OnModelCreating(modelBuilder);
    }
}