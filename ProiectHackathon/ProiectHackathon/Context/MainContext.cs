using Microsoft.EntityFrameworkCore;
using ProiectHackathon.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectHackathon.Context
{
    public class MainContext: DbContext
    {
       
        public MainContext(DbContextOptions<MainContext> options): base(options)
        {

        }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<Exercises> Exercises { get; set; } 
        public DbSet<User> Users { get; set; }
    }
}
