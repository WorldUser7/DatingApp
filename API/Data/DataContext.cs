using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    
    public DbSet<AppUser> Users {get; set;} // this is a table called users that uses the id as the primary key (from the AppUser class)
}
