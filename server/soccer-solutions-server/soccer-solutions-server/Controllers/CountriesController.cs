using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace soccer_solutions_server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        public IActionResult GetCountries()
        {
            var countries = System.IO.File.ReadAllText("countries.json");
            return Ok(countries);
        }
    }
}
