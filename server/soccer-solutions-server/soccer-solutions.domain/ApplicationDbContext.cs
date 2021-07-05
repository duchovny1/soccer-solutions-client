using Microsoft.EntityFrameworkCore;
using soccer_solutions.domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace soccer_solutions.domain
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<League> Leagues { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Prediction> Predictions { get; set; }
    }
}
