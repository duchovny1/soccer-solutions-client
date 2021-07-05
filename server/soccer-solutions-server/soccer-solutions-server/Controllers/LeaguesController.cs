using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using soccer_solutions.domain;
using soccer_solutions_server.Models;

namespace soccer_solutions_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LeaguesController : Controller
    {
        private readonly ApplicationDbContext context;

        public LeaguesController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }

        [HttpGet("by-countryId")]
        public IActionResult GetLeaguesByCountryId([FromQuery] int countryId)
        {

            var leagues = this.context.Leagues.Where(x => x.CountryId == countryId)
                .Select(x => new GetLeaguesResponse
            {
                LeagueId = x.Id,
                LeagueName = x.LeagueName

            }).ToList();

            return Ok(leagues);
        }

        [HttpGet("by-date")]
        public IActionResult GetLeaguesByDate(string date)
        {
            var leaguesWithGames = System.IO.File.ReadAllText("leaguesWithGames1.json");
            return Ok(leaguesWithGames);
        }

        [HttpGet("getFixtures")]
        public IActionResult GetPastfixtures()
        {
            var leaguesWithGames = System.IO.File.ReadAllText("pastFixtures.json");
            return Ok(leaguesWithGames);
        }
    }
}
