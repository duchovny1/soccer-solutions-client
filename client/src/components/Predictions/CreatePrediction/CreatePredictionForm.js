import { Button, Form } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import * as countriesService from "../../../services/countriesService";
import CascadeDropDownMenu from "./CascadeDropDownMenu";
import { useState, useRef, useContext } from "react";
import Card from "../../Common/Card/Card";
import styled from "styled-components";
import { AuthContext } from "../../../contexts/AuthContext";
import * as ps from "../../../services/predictionsService";

const CreatePredictionForm = () => {
  const [state, setState] = useState({
    description: "",
    prediction: "",
    isSubmitted: false,
  });

  const [selectedCountry, selectCountry] = useState({});
  const [selectedLeague, selectLeague] = useState({});
  const [selectedHomeTeam, selectHomeTeam] = useState({});
  const [selectedAwayTeam, selectAwayTeam] = useState({});
  const [descriptionError, setDescriptionErrorMessage] = useState("");
  const [predictionError, setPredictionErrorMessage] = useState("");
  const [isDescriptionErr, setDescriptionError] = useState(false);
  const [isPredictionErr, setPredictionError] = useState(false);

  const [shouldShowFormFields, setShouldShowFormFields] = useState(false);

  const { userName } = useContext(AuthContext);

  const StyledInvalidInput = styled.span`
    color: #ff8080;
    font-size: 18;
    font-style: italic;
  `;

  const isFormValid = (description, prediction) => {
    if (description.length < 10) {
      const descriptionEl = document.getElementById("description");
      descriptionEl.classList.add("input-invalid");
      setDescriptionErrorMessage("The description is too small!");
      setDescriptionError(true);
    }

    if (prediction.length > 10) {
      const predictionEl = document.getElementById("prediction");
      predictionEl.classList.add("input-invalid");
      setPredictionErrorMessage("The prediction is invalid!");
      setPredictionError(true);
    }

    const el = document.getElementsByClassName("input-invalid")[0];

    if (el) {
      el.focus();
      return false;
    }

    var elems = document.querySelectorAll(".input-invalid");

    [].forEach.call(elems, function (el) {
      el.classList.remove(".input-invalid");
    });

    setDescriptionError(false);
    setPredictionError(false);
    setDescriptionError("");
    setPredictionError("");

    return true;
  };

  const onChangeHandler = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const showInputFieldsHandler = (teamOneId, teamTwoId) => {
    if (teamOneId && teamTwoId) {
      setShouldShowFormFields(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    setState({ isSubmitted: true });

    const description = e.target.description.value;
    const prediction = e.target.prediction.value;

    if (isFormValid(description, prediction)) {
      const data = {
        country: selectedCountry,
        league: selectedLeague,
        homeTeam: selectedHomeTeam,
        awayTeam: selectedAwayTeam,
        prediction: prediction,
        description: description,
        user: userName,
      };

      ps.createPrediction(data);
    }
  };

  return (
    <Card>
      <CascadeDropDownMenu
        showInputFieldsHandler={showInputFieldsHandler}
        selectedCountry={selectedCountry}
        selectCountry={selectCountry}
        selectedLeague={selectedLeague}
        selectLeague={selectLeague}
        selectedHomeTeam={selectedHomeTeam}
        selectHomeTeam={selectHomeTeam}
        selectedAwayTeam={selectedAwayTeam}
        selectAwayTeam={selectAwayTeam}
      />
      {shouldShowFormFields && (
        <Form onSubmit={submitForm}>
          <Form.Group>
            <Form.Label htmlFor="description">Description:</Form.Label>
            <Form.Control type="textarea" id="description" name="description" />
          </Form.Group>
          {isDescriptionErr ? (
            <StyledInvalidInput>{descriptionError}</StyledInvalidInput>
          ) : (
            <span style={{ display: "none" }}></span>
          )}
          <Form.Group>
            <Form.Label htmlFor="prediction">Prediction:</Form.Label>
            <Form.Control type="text" id="prediction" name="prediction" />
          </Form.Group>
          {isPredictionErr ? (
            <StyledInvalidInput>{predictionError}</StyledInvalidInput>
          ) : (
            <span style={{ display: "none" }}></span>
          )}
          <Button variant="dark" type="submit">
            Create!
          </Button>
        </Form>
      )}
    </Card>
  );
};

export default CreatePredictionForm;
