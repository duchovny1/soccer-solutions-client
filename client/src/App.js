import logo from "./logo.svg";
import "./App.css";
import GamesForCurrentLeaguePerDayContainer from "./components/MainPage/GamesForCurrentLeaguePerDay/GamesForCurrentLeaguePerDayContainer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompetitionsPage from "./components/Competitions/CompetitionsPage";
import Head2Head from "./components/H2H/Head2Head";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={GamesForCurrentLeaguePerDayContainer}
          />
          <Route
            path="/fixtures"
            exact
            component={GamesForCurrentLeaguePerDayContainer}
          />
          <Route path="/competitions" exact component={CompetitionsPage} />
          <Route
            path="/head2head/:teamOneId/:teamTwoId"
            exact
            component={Head2Head}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
