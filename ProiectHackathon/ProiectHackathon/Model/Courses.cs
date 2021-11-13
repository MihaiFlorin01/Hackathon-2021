using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectHackathon.Model
{
    public class Courses
    {
        [Key]
        public int CourseId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }      
        public List<Exercises> Exercises { get; set; }
    }
}
