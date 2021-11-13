using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon_2021.Model
{
    public class User
    {
        public int _UserID { get; set; }
        public string _Username { get; set; }
        public string _Password { get; set; }
        public string _Email { get; set; }
        public Courses courses { get; set; }



    }
}
