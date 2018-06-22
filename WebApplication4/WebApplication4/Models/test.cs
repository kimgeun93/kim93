using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication3.Models
{
	public class testpages
	{

		[Key]

		public int id { get; set; }

		public string recom_up { get; set; }

		public string recom_down { get; set; }

	}

	public class testContext : DbContext

	{

		public testContext() : base("testa") { }

		public DbSet<testpages> testdb { get; set; }

	}

}