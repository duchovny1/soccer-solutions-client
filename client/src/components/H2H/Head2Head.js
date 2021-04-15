import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import H2HStatisticsInfo from "./H2HStatisticsInfo";
import TeamCardStatisticsContainer from "./TeamCardStatisticsContainer";

const Head2Head = () => {
  const StyledContainer = styled(Container)`
    padding: 0;
  `;

  const [state, setState] = useState({
    head2head: {
      homeTeamId: 1,
      awayTeamId: 2,
    },
  });

  return (
    <div>
      <StyledContainer>
        <div
          className="border-top border-dark"
          style={{
            backgroundColor: "#ede9e9",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TeamCard teamId={state.head2head.homeTeamId} />
          <H2HStatisticsInfo teams={state.head2head} />
          <TeamCard teamId={state.head2head.awayTeamId} />
        </div>
      </StyledContainer>
      <TeamCardStatisticsContainer
        className="mt-4"
        teamOneId={state.head2head.homeTeamId}
        teamTwoId={state.head2head.awayTeamId}
      />
    </div>
  );
};

export default Head2Head;
