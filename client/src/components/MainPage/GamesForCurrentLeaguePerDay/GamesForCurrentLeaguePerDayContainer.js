import React, { useState, useEffect } from "react";
import DatePicker from "../../DatePicker/DatePicker";
import GamesPerSingleLeague from "./GamesPerSingleLeague";

const GamesForCurrentLeaguePerDayContainer = () => {
  const [gamesOnCurrentDate, getGamesForCurrentDate] = useState(new Date());

  useEffect(() => {
    console.log("its changed:");
    console.log(gamesOnCurrentDate.toLocaleDateString());
  }, [gamesOnCurrentDate]);

  const leagueGames = [
    {
      leagueName: "Premier League",
      countryName: "England",
      games: [
        {
          homeTeamName: "Liverpool",
          awayTeamName: "Manchester City",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
        {
          homeTeamName: "West Ham",
          awayTeamName: "Arsenal",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
        {
          homeTeamName: "Chelsea",
          awayTeamName: "Brighton Albion",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
      ],
    },
    {
      leagueName: "Championship",
      countryName: "England",
      games: [
        {
          homeTeamName: "Reading",
          awayTeamName: "Hull City",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
        {
          homeTeamName: "Cardiff",
          awayTeamName: "Middlesbro",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
        {
          homeTeamName: "Portsmouth",
          awayTeamName: "Burnley",
          kickOff: "22:00",
          status: "NotStarted",
          result: "0:0",
        },
      ],
    },
  ];

  return (
    <div>
      {leagueGames.map((x) => {
        console.log(x);
        return (
          <GamesPerSingleLeague
            leagueName={x.leagueName}
            games={x.games}
            countryName={x.countryName}
          />
        );
      })}
      <DatePicker
        gamesOnCurrentDate={gamesOnCurrentDate}
        getGamesForCurrentDate={getGamesForCurrentDate}
      />
    </div>
  );
};

export default GamesForCurrentLeaguePerDayContainer;
