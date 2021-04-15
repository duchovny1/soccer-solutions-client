import TeamCardStatistics from "./TeamCardStatistics";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const TeamCardStatisticsContainer = ({ teamOneId, teamTwoId }) => {
  const StyledContainer = styled(Container)`
    display: flex;
    background-color: rgb(237, 233, 233);
  `;
  return (
    <StyledContainer>
      <TeamCardStatistics teamId={teamOneId} />
      <TeamCardStatistics teamId={teamTwoId} />
    </StyledContainer>
  );
};

export default TeamCardStatisticsContainer;
