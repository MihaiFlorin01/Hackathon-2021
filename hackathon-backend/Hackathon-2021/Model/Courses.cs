using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon_2021.Model
{
    public class Courses
    {
        public int _CourseID { get; set; }
        public List<User> _Users { get; set; }
        public string _Domain { get; set; }
        public string _Description { get; set; }
    }
}
