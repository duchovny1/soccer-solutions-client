import { Component } from "react";

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

  isFormValid() {
    console.log("asdsada");
    debugger;
    const el = document.getElementsByClassName("input-invalid")[0];

    if (el) {
      el.focus();
    }
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

    console.log(this.state);
  }

  render() {
    return (
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
    );
  }
}

export default CreatePredictionForm;
