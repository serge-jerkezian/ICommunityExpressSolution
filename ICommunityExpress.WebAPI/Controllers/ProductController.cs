using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ICommunityExpress.WebAPI.Model;
using Microsoft.AspNetCore.Mvc;


namespace ICommunityExpress.WebAPI.Controllers
{
    public class ProductController : Controller
    {
        // [HttpGet]
        // public string Detail(int id)
        // {
        //     return "sun";
        // }

        [HttpGet]
        public ProductDetail Detail(int id)
        {
            ProductDetail product = new ProductDetail{id = 1, name = "serge",price = 33};

            return product;
        }

        [HttpGet]
        public IActionResult DetailError(int id)
        {
            return new StatusCodeResult(500);
        }

    }
}
