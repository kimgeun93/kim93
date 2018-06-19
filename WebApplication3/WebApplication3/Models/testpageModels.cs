using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication3.Models
{
	public class testpageModels
	{

		[Key]

		public int id { get; set; }

		public string recom_up { get; set; }

		public string recom_down { get; set; }

	}

	public class testContext : DbContext

	{

		public testContext() : base("test") { }

		public DbSet<testpageModels> testdb { get; set; }

	}

}