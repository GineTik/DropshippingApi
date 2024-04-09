using System.Text.Json;
using Backend.Core.Entities;
using Backend.Core.Entities.Offer;
using Backend.Core.Entities.User;
using Backend.Core.Entities.User.Dropshipper;
using Backend.Core.Entities.User.Supplier;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.EF;

public class DataContext : DbContext
{
    public required DbSet<User> Users { get; set; }
    public required DbSet<Role> Roles { get; set; }
    public required DbSet<UserRole> UserRoles { get; set; }
    
    // Dropshipper
    public required DbSet<ApiKey> ApiKeys { get; set; }
    public required DbSet<AllowHost> AllowHosts { get; set; }
    public required DbSet<DropshipperSettings> DropshipperSettings { get; set; }
    
    // Supplier
    public required DbSet<SupplierSettings> SupplierSettings { get; set; }
    public required DbSet<RefreshTime> AvailableYmlRefreshTimes { get; set; }
    public required DbSet<Link> Links { get; set; }
    public required DbSet<Tag> Tags { get; set; }
    
    // Offer
    public required DbSet<Offer> Offers { get; set; }
    
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
        
        modelBuilder.Entity<DropshipperSettings>()
            .Property(settings => settings.MaxLengthOfAllows)
            .HasDefaultValue(10);
        
        modelBuilder.Entity<SupplierSettings>()
            .Property(settings => settings.YmlLoadTypeId)
            .HasDefaultValue((int)YmlLoadTypes.File);
        
        modelBuilder.Entity<SupplierSettings>()
            .Property(settings => settings.RefreshTimeId)
            .HasDefaultValue(1);

        modelBuilder.Entity<RefreshTime>()
            .HasData(new RefreshTime
            {
                Id = 1,
                Time = 5,
                TimeType = TimeType.Minute
            }, new RefreshTime
            {
                Id = 2,
                Time = 10,
                TimeType = TimeType.Minute
            }, new RefreshTime
            {
                Id = 3,
                Time = 30,
                TimeType = TimeType.Minute
            }, new RefreshTime
            {
                Id = 4,
                Time = 1,
                TimeType = TimeType.Hour
            });

        modelBuilder.Entity<Offer>()
            .Property(e => e.Fields)
            .HasConversion(
                v => JsonSerializer.Serialize(v, new JsonSerializerOptions()),
                v => JsonSerializer.Deserialize<IDictionary<string, object>>(
                    v, new JsonSerializerOptions()) ?? new Dictionary<string, object>()
            );
        
        base.OnModelCreating(modelBuilder);
    }
}