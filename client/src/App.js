import logo from "./logo.svg";
import "./App.css";
import GamesForCurrentLeaguePerDayContainer from "./components/MainPage/GamesForCurrentLeaguePerDay/GamesForCurrentLeaguePerDayContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <GamesForCurrentLeaguePerDayContainer />
    </div>
  );
}

export default App;
