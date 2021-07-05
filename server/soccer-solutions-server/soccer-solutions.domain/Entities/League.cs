using System;
using System.Collections.Generic;
using System.Text;

namespace soccer_solutions.domain.Entities
{
    public class League
    {
        public int Id { get; set; }

        public string LeagueName { get; set; }

        public string CountryName { get; set; }

        public int CountryId { get; set; }

        public string Code { get; set; }
    }
}
