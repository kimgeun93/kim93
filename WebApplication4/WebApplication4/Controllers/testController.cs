using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
	public class testpageController : Controller
	{
		private testContext db = new testContext();


		// GET: test
		public ActionResult Index()
		{
			return View();
		}

		[HttpGet]
		public ActionResult testpage()
		{
			return View();
		}

		[HttpPost]
		public ActionResult testpage(String recom_up, String recom_down)
		{


			String date = DateTime.Now.ToLongDateString();
			String time = DateTime.Now.ToLongTimeString();
			

			String ConnectionString = @"Data Source=DD_STUDIO\SQLEXPRESS; Initial Catalog=testa ; user ID=sa; Password=sa43";
			String sql = "insert into testpages(recom_up, recom_down) values('" + recom_up + "' , '" + recom_down + "')";
			String sql1 = "update testpages set recom_up = '" + recom_up + "' , times = '" + time + "' where id = '23'";
			String temp;
			SqlDataAdapter sqladap = new SqlDataAdapter();


			SqlConnection cnn;
			cnn = new SqlConnection(ConnectionString);

			cnn.Open();

			SqlCommand command = new SqlCommand(sql1, cnn);


			if (recom_up != null || recom_down != null) { 
			    temp = sql1;
			    sqladap.UpdateCommand = new SqlCommand(temp, cnn);
			    sqladap.UpdateCommand.ExecuteNonQuery();
		     }
			command.Dispose();
			cnn.Close();

			return View();
		}
	}
}