using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserServer.Models
{
    public class User
    {

        public string Name { get; set; }
        public string UserId { get; set; }
        public string AccountNumber { get; set; }
        public decimal CurrentWage { get; set; }

        public User(string name, string userId, string accountNumber, decimal currentWage)
        {
            Name = name;
            UserId = userId;
            AccountNumber = accountNumber;
            CurrentWage = currentWage;
        }

        public User()
        {
        }
    }
}