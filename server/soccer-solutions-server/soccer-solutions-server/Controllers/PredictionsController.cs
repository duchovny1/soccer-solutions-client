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
    public class PredictionsController : ControllerBase
    {
        public IActionResult Get()
        {
            var predictions = System.IO.File.ReadAllText("predictions.json");

            return Ok(predictions);
        }
    }
}
