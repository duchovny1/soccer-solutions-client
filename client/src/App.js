import logo from "./logo.svg";
import "./App.css";
import GamesForCurrentLeaguePerDayContainer from "./components/MainPage/GamesForCurrentLeaguePerDay/GamesForCurrentLeaguePerDayContainer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CompetitionsPage from "./components/Competitions/CompetitionsPage";
import Head2Head from "./components/H2H/Head2Head";
import Predictions from "./components/Predictions/AllPredictions/Predictions";
import CreatePredictionPage from "./components/Predictions/CreatePrediction/CreatePredictionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/fixtures" />
          </Route>
          <Route path="/competitions" exact component={CompetitionsPage} />
          <Route
            path="/fixtures"
            exact
            component={GamesForCurrentLeaguePerDayContainer}
          />
          <Route
            path="/head2head/:teamOneId/:teamTwoId"
            exact
            component={Head2Head}
          />
          <Route path="/predictions" exact component={Predictions} />
          <Route
            path="/predictions/create"
            exact
            component={CreatePredictionPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
