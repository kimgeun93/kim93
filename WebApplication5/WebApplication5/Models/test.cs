using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
	public class testpages
	{

		[Key]

		public int id { get; set; }

		public string recom_up { get; set; }

		public string recom_down { get; set; }

		public string times { get; set; }

		public string views { get; set; }

		public string login_id { get; set; }

		public string login_pass { get; set; }

		public string comment { get; set; }


	}

	public class testContext : DbContext

	{

		public testContext() : base("testa") { }

		public DbSet<testpages> testdb { get; set; }

	}

}