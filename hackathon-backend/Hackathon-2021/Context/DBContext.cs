using Hackathon_2021.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon_2021.Context
{
    public class DBContext:DbContext
    {
        public DBContext(DbContextOptions<DBContext> Options):base(Options)
        {
        }

        public DbSet<User> userDBSet { get; set; }
        public DbSet<Courses> courseDBSet { get; set; }
    }
}
