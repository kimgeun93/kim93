using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;


namespace WebApplication3.Models
{
    public class HelloWorld

    {

        [Key]

        public int id { get; set; }

        public string age { get; set; }

        public string name { get; set; }

    }

    public class HelloWorldContext : DbContext

    {

        public HelloWorldContext() : base("kim") { }



        public DbSet<HelloWorld> HelloWorlds { get; set; }

    }


  
}