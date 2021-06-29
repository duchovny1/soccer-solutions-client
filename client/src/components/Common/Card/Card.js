import { Container } from "react-bootstrap";
import styled from "styled-components";

const Card = (props) => {
  const StyledContainer = styled(Container)`
    width: 500px;
  `;
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Card;
