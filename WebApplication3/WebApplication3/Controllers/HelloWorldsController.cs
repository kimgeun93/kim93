using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    public class HelloWorldsController : Controller
    {
        private HelloWorldContext db = new HelloWorldContext();

        // GET: HelloWorlds
        public ActionResult Index()
        {
            return View(db.HelloWorlds.ToList());
        }

        // GET: HelloWorlds/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HelloWorld helloWorld = db.HelloWorlds.Find(id);
            if (helloWorld == null)
            {
                return HttpNotFound();
            }
            return View();
        }

        // GET: HelloWorlds/Create
        public ActionResult Create([Bind(Include = "id,age,name")] HelloWorld helloWorld, int? age =3)
        {
           

            return View();
        }

        // POST: HelloWorlds/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,age,name")] HelloWorld helloWorld)
        {
            if (ModelState.IsValid)
            {
                db.HelloWorlds.Add(helloWorld);
                db.SaveChanges();
                return RedirectToAction("Index");
            }



            return View(helloWorld);
        }

        // GET: HelloWorlds/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HelloWorld helloWorld = db.HelloWorlds.Find(id);
            if (helloWorld == null)
            {
                return HttpNotFound();
            }
            return View(helloWorld);
        }

        // POST: HelloWorlds/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,age,name")] HelloWorld helloWorld)
        {
            if (ModelState.IsValid)
            {
                db.Entry(helloWorld).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(helloWorld);
        }

        // GET: HelloWorlds/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HelloWorld helloWorld = db.HelloWorlds.Find(id);
            if (helloWorld == null)
            {
                return HttpNotFound();
            }
            return View(helloWorld);
        }

        // POST: HelloWorlds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            HelloWorld helloWorld = db.HelloWorlds.Find(id);
            db.HelloWorlds.Remove(helloWorld);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
