using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Data
{
    public class Project1Context : DbContext
    {
        public Project1Context(DbContextOptions<Project1Context> options)
            : base(options)
        {
        }

        public DbSet<Project1.Models.Student> Student { get; set; }

        public DbSet<Project1.Models.Teacher> Teacher { get; set; }

        public DbSet<Project1.Models.Lesson> Lesson { get; set; }

        public DbSet<Project1.Models.Plan> Plan { get; set; }

        public DbSet<Project1.Models.Owner> Owner { get; set; }
    }
}
