import React, { useState, useEffect } from "react";
import DatePicker from "../../DatePicker/DatePicker";
import GamesPerSingleLeague from "./GamesPerSingleLeague";
import styles from "styled-components";
import { Container } from "react-bootstrap";
import * as leaguesService from "../../../services/leaguesService";

const GamesForCurrentLeaguePerDayContainer = () => {
  const [gamesOnCurrentDate, getGamesForCurrentDate] = useState(new Date());
  const [leaguesWithGames, setLeagueWithGames] = useState([]);

  useEffect(() => {
    leaguesService
      .getLeaguesByDate(gamesOnCurrentDate.toLocaleDateString("en-US"))
      .then((res) => setLeagueWithGames(res));
  }, [gamesOnCurrentDate]);

  const StyledDiv = styles.div`
         display: flex;
         flex-direction: row;
  `;

  const StyledContainer = styles(Container)`
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledDiv>
      <StyledContainer>
        {leaguesWithGames.map((x, i) => {
          return (
            <GamesPerSingleLeague
              index={i}
              leagueName={x.leagueName}
              games={x.games}
              countryName={x.countryName}
            />
          );
        })}
      </StyledContainer>
      <DatePicker
        gamesOnCurrentDate={gamesOnCurrentDate}
        getGamesForCurrentDate={getGamesForCurrentDate}
      />
    </StyledDiv>
  );
};

export default GamesForCurrentLeaguePerDayContainer;
