import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CreatePredictionButton = () => {
  const StyledButton = styled(Button)`
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 0 0.2rem #ff6700 !important;
      color: #1d2124;
      background-color: #fff;
      border-color: white;
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem #ff6700;
      color: #1d2124;
      background-color: #fff;
    }
  `;

  return (
    <div>
      <Link to="/predictions/create">
        <StyledButton variant="dark">Create prediction</StyledButton>
      </Link>
    </div>
  );
};

export default CreatePredictionButton;
