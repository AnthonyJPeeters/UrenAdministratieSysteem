using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using UserServer.Models;

namespace UserServer
{
    public class UserProjectContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}