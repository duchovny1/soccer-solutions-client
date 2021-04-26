import { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import * as countriesService from "../../../services/countriesService";
import CascadeDropDownMenu from "./CascadeDropDownMenu";

class CreatePredictionForm extends Component {
  constructor(props) {
    super(props);

    this.isFormValid.bind(this);
    this.state = {
      nameOfTheGame: "",
      description: "",
      prediction: "",
      isSubmitted: false,
    };
  }

  componentDidMount() {
    console.log(this.state.countries);
  }

  isFormValid() {
    const el = document.getElementsByClassName("input-invalid")[0];

    if (el) {
      el.focus();
      return false;
    }

    return true;
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    this.setState({ isSubmitted: true });

    if (this.isFormValid()) {
      console.log("xoxo");
    }
  }
  render() {
    return (
      <div>
        <CascadeDropDownMenu />
        <form onSubmit={this.submitForm.bind(this)}>
          <div>
            <label htmlFor="nameOfTheGame">Name of the game:</label>
            <input
              type="text"
              id="nameOfTheGame"
              name="nameOfTheGame"
              value={this.state.nameOfTheGame}
              onChange={this.onChangeHandler.bind(this)}
              className={
                this.state.nameOfTheGame.length < 5 ? "input-invalid" : ""
              }
            />
            {this.state.isSubmitted && this.state.nameOfTheGame.length < 5 && (
              <span>The data is invalid!</span>
            )}
            <label htmlFor="description">Description:</label>
            <input
              type="description"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.onChangeHandler.bind(this)}
            />
            <label htmlFor="prediction">Prediction:</label>
            <input
              type="text"
              id="prediction"
              name="prediction"
              value={this.state.prediction}
              onChange={this.onChangeHandler.bind(this)}
            />
            <button type="submit">Create!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePredictionForm;
