import react from "react";

import styled from "styled-components";
import { Container } from "react-bootstrap";

const TeamCard = ({ teamId }) => {
  console.log(teamId);
  console.log("team-card");
  const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid #ff6700;
    object-fit: contain;
    border-radius: 50%;
  `;

  const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    padding: 10px;
  `;

  return (
    <div>
      <StyledContainer>
        <h4>Man city</h4>
        <StyledImg
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
          alt=""
          className="img-thumbnail float-right"
        />
      </StyledContainer>
    </div>
  );
};

export default TeamCard;
