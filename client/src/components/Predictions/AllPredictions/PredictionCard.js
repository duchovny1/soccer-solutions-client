import { useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Container, Figure, Media, Image, Button } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import styled from "styled-components";

const PredictionCard = ({ prediction, history }) => {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, []);

  const StyledContainer = styled(Container)`
    margin-top: 20px;
    border-top: 1px solid black;
    background-color: rgb(237, 233, 233);
  `;

  const StyledImage = styled(Image)`
    height: 200px;
    width: 200px;
  `;

  const StyledMediaBody = styled(Media.Body)`
    position: relative;
    left: 4em;
    padding-top: 20px;
    font-size: 17px;
    font-family: Helvetica;
  `;
  return (
    <StyledContainer>
      <Media className="mt-1">
        <Figure>
          <StyledImage
            className="mr-3"
            src={prediction.homeTeamImgURL}
            alt={prediction.homeTeamName}
          />
          <FigureCaption className="text-center" style={{ color: "black" }}>
            {prediction.homeTeamName}
          </FigureCaption>
        </Figure>
        <Figure>
          <StyledImage
            className="mr-3"
            src={prediction.awayTeamImgURL}
            alt={prediction.awayTeamName}
          />
          <FigureCaption
            className="figure-caption text-center"
            style={{ color: "black" }}
          >
            {prediction.awayTeamName}
          </FigureCaption>
        </Figure>
        {prediction.shortContent !== "" ? (
          <StyledMediaBody className="text-break">
            {prediction.shortContent}
            <Button className="btn-warning">Read More</Button>
          </StyledMediaBody>
        ) : (
          <StyledMediaBody className="text-break">
            {prediction.content}
          </StyledMediaBody>
        )}

        <Media.Body className="media-body">
          <p style={{ marginBottom: "0", float: "right" }}>Prediction:</p>
          <br />
          <p style={{ marginTop: "0", float: "right" }}>
            {prediction.prediction}
          </p>
        </Media.Body>
      </Media>
    </StyledContainer>
  );
};
export default PredictionCard;
