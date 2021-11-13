using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectHackathon.Model
{
    public class Exercises
    {
        [Key]
        public int ExerciseId { get; set; }
        public string Domain { get; set; }
        public Courses course { get; set; }
    }
}
