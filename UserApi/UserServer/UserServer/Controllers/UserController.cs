using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserServer.Models;

namespace UserServer.Controllers
{
    public class UserController : ApiController
    {
        // GET: api/User/test
        [Route("api/user/{username}")]
        public User Get(string username)
        {
            User user = WebApiConfig.db.Users.SingleOrDefault(userQuery => userQuery.Name == username);
            return user;
        }


        public List<User> Get()
        {
            return WebApiConfig.db.Users.ToList<User>();
        }

        // POST: api/User
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
