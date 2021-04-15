import React, { useState, useEffect } from "react";
import DatePicker from "../../DatePicker/DatePicker";
import GamesPerSingleLeague from "./GamesPerSingleLeague";
import styles from "styled-components";
import { Container } from "react-bootstrap";
import * as leaguesService from "../../../services/leaguesService";

const GamesForCurrentLeaguePerDayContainer = () => {
  const [gamesOnCurrentDate, getGamesForCurrentDate] = useState(new Date());

  useEffect(() => {
    leaguesService.getLeaguesByDate(
      gamesOnCurrentDate.toLocaleDateString("en-US")
    );
  }, [gamesOnCurrentDate]);

  const StyledDiv = styles.div`
         display: flex;
         flex-direction: row;
  `;

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
    <StyledDiv>
      <Container>
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
      </Container>
      <DatePicker
        gamesOnCurrentDate={gamesOnCurrentDate}
        getGamesForCurrentDate={getGamesForCurrentDate}
      />
    </StyledDiv>
  );
};

export default GamesForCurrentLeaguePerDayContainer;
