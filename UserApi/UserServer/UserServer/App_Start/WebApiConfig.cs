using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;

namespace UserServer
{
    public static class WebApiConfig
    {
        public static UserProjectContext db { get; private set; }

        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            db = new UserProjectContext();

            Random rnd = new Random();
            db.Users.Add(new Models.User("TestUsercreated" + rnd.Next(100000, 500000), Guid.NewGuid().ToString(), rnd.Next(100000, 500000).ToString(), (decimal)8.10));
            db.SaveChanges();
            string connection = db.Database.Connection.ConnectionString;


            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
