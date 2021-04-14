import "./App.css";
import GamesForCurrentLeaguePerDayContainer from "./components/MainPage/GamesForCurrentLeaguePerDay/GamesForCurrentLeaguePerDayContainer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CompetitionsPage from "./components/Competitions/CompetitionsPage";
import Head2Head from "./components/H2H/Head2Head";
import Predictions from "./components/Predictions/AllPredictions/Predictions";
import CreatePredictionPage from "./components/Predictions/CreatePrediction/CreatePredictionPage";
import Login from "./components/Login/Login";
import "./utils/firebase";
import Register from "./components/Register/Register";
import { auth } from "./utils/firebase";
import { useState, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { isAuth } from "./hoc/isAuth";
import "react-calendar/dist/Calendar.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={authInfo}>
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
            <Route path="/predictions" exact component={isAuth(Predictions)} />
            <Route
              path="/predictions/create"
              exact
              component={isAuth(CreatePredictionPage)}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route
              path="/logout"
              exact
              render={() => {
                auth.signOut();
                return <Redirect to="/fixtures" />;
              }}
            />
          </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
