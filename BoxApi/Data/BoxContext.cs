// Data/BoxContext.cs
using Microsoft.EntityFrameworkCore;
using BoxApi.Models;

namespace BoxApi.Data
{
    public class BoxContext : DbContext
    {
        public BoxContext(DbContextOptions<BoxContext> options) : base(options) { }
        public DbSet<Box> Boxes { get; set; }
    }
}
