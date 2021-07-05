using Microsoft.EntityFrameworkCore.Migrations;

namespace soccer_solutions.domain.Migrations
{
    public partial class AddCountryIdInLeagueTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CountryId",
                table: "Leagues",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "Leagues");
        }
    }
}
