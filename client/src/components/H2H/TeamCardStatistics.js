import { useState } from "react";
import styled from "styled-components";

const TeamCardStatistics = ({ teamId }) => {
  const [teamStats, setTeamStats] = useState({
    teamName: "Man City",
    scoredGoals: 4,
    bthsInLast20Games: 20,
    over2p5GoalsInLast20Games: 14,
  });
  const StyledTable = styled.table`
      display: flex;
    justify-content: center;
}`;

  return (
    <div class="d-block" style={{ backgroundColor: "#ede9e9", width: "50%" }}>
      <div class="row">
        <div class="col">
          <StyledTable>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>{teamStats.teamName} had scored:</strong>
                    {teamStats.scoredGoals}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ wordWrap: "break-word" }}>
                    In last 20 {teamStats.teamName}'s games both teams had
                    scored: {teamStats.bthsInLast20Games} times
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ wordWrap: "break-word" }}>
                    In last 20 {teamStats.teamName}'s games{" "}
                    {teamStats.over2p5GoalsInLast20Games} are over 2.5 goals
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ wordWrap: "break-word" }}>
                    HomeTeamName is winning 16% of their home games.
                  </p>
                </td>
              </tr>
            </tbody>
          </StyledTable>
        </div>
      </div>
    </div>
  );
};

export default TeamCardStatistics;
