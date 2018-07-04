using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication5.Models;

namespace WebApplication5.Controllers
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
		public ActionResult testpage(int? i)
		{
			ViewBag.id = i;
            int comment_list_count;
            String select = "select comment,recom_up,recom_down from testpages where id = '1' ";
			String ConnectionString = @"Data Source=DD_STUDIO\SQLEXPRESS; Initial Catalog=testa ; user ID=sa; Password=sa43";

			SqlConnection cnn;
			SqlDataReader datareader;

			cnn = new SqlConnection(ConnectionString);
			SqlCommand command = new SqlCommand(select, cnn);
			cnn.Open();

			datareader = command.ExecuteReader();
			datareader.Read();
									
				String comment_select_data = (String)datareader["comment"];
                int recom_u = (int)datareader["recom_up"];
                int recom_d = (int)datareader["recom_down"];

            String[] comment_list = comment_select_data.Split('§');
            comment_list_count = comment_list.Length;
            ViewBag.comment_data = comment_select_data;
            ViewBag.comment_list_data = comment_list_count;
            ViewBag.i = i;
            ViewBag.recom_up = recom_u;
            ViewBag.recom_down = recom_d;

            datareader.Close();
			command.Dispose();
			cnn.Close();
			
			return View();
		}

		[HttpPost]
		public Newtonsoft.Json.Linq.JObject testpage(String recom_up, String recom_down, String comment,String auto_display ,int? i)
		{

			int comment_list_count;
			String comment_list_count_string;
			ViewBag.dx = "11";

            Newtonsoft.Json.Linq.JArray array = new Newtonsoft.Json.Linq.JArray();
            Newtonsoft.Json.Linq.JObject ob = new Newtonsoft.Json.Linq.JObject();

           
            String date = DateTime.Now.ToLongDateString();
			String time = DateTime.Now.ToLongTimeString();
			

			String ConnectionString = @"Data Source=DD_STUDIO\SQLEXPRESS; Initial Catalog=testa ; user ID=sa; Password=sa43";
			
			String add = "insert into testpages(recom_up, recom_down) values('" + recom_up + "' , '" + recom_down + "')";
			String update = "update testpages set recom_up = '" + recom_up + "' , times = '" + time + "' where id = '1'";
			String select = "select comment, recom_up, recom_down from testpages where id = '1' ";
            String auto_display_update = "update testpages set auto_display = '" + auto_display + "' where id = '1'";

            String temp;


			SqlDataAdapter sqladap = new SqlDataAdapter();
			SqlDataReader datareader;
			SqlConnection cnn;

			cnn = new SqlConnection(ConnectionString);
			cnn.Open();

			SqlCommand command = new SqlCommand(select, cnn);
			datareader = command.ExecuteReader();
			datareader.Read();
			String comment_select_data = (String)datareader["comment"];
            int recom_u = (int)datareader["recom_up"];
            int recom_d = (int)datareader["recom_down"];
            comment_select_data = comment_select_data + "§" + comment;

			String[] comment_list = comment_select_data.Split('§');
			
				comment_list_count = comment_list.Length;

			comment_list_count_string = comment_list_count.ToString();

			Console.Write(comment_list_count+comment_list.Length);


            /**
			if (datareader != null)
			{
				String comment_select_data = (String)datareader["comment"];
				System.Text.StringBuilder sb = new System.Text.StringBuilder();
				sb.Append(comment_select_data);
				sb.Append("," + comment);
				comment = sb.ToString();
			}
	        **/

            recom_u += 1;
            recom_d += 1;
			String comment_update = "update testpages set comment = '" + comment_select_data + "' where id = '1'";
            String recom_up_update = "update testpages set recom_up = " + recom_u + " where id = '1'";
            String recom_down_update = "update testpages set recom_down = '" +  recom_d + "' where id = '1'";
            datareader.Close();

			if (comment != null)
			{
				temp = comment_update;
				sqladap.UpdateCommand = new SqlCommand(temp, cnn);
				sqladap.UpdateCommand.ExecuteNonQuery();
			}

			if (recom_up != null) { 
			    temp = recom_up_update;
			    sqladap.UpdateCommand = new SqlCommand(temp, cnn);
			    sqladap.UpdateCommand.ExecuteNonQuery();
		     }
        
            if ( recom_down != null)
            {
                temp = recom_down_update;
                sqladap.UpdateCommand = new SqlCommand(temp, cnn);
                sqladap.UpdateCommand.ExecuteNonQuery();
            }

       
            ob.Add("recom_up", recom_u);
            ob.Add("recom_down", recom_d);
            ob.Add("comment_list_count_string", comment_list_count_string);
            
            array.Add(ob);
            String arr_obj = array.ToString();
            String ob_obj = ob.ToString();
           
            datareader.Close();
			command.Dispose();
			cnn.Close();

            
            return ob;
		}
	}
}