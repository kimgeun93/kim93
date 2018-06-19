using System;
using System.Collections.Generic;
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
		public ActionResult testpage( [Bind(Include = "recom_up, recom_down")]testpageModels tests , String up_val,String down_val)
		{

			if (up_val != null) { tests.recom_up = up_val; }
			if (down_val != null) { tests.recom_down = down_val; }
			db.testdb.Add(tests);
			db.SaveChanges();

			return View(tests);
		}
    }
}