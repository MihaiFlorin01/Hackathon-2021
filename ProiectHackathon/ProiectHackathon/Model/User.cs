using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ProiectHackathon.Model
{
    public class User
    {
        //public static string MD5Hash(String input)
        //{
        //    StringBuilder hash = new StringBuilder();
        //    MD5CryptoServiceProvider md5provider = new MD5CryptoServiceProvider();
        //    byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(input));

        //    for (int i = 0; i < bytes.Length; i++)
        //    {
        //        hash.Append(bytes[i].ToString("x2"));
        //    }

        //    return hash.ToString();
        //}

        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
