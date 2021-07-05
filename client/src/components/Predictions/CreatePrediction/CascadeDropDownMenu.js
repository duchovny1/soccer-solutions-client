import { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import * as countriesService from "../../../services/countriesService";
import * as leaguesService from "../../../services/leaguesService";
import premierLeagueTeams from "../../../utils/teams";

const CascadeDropDownMenu = ({
  showInputFieldsHandler,
  selectedCountry,
  selectCountry,
  selectedLeague,
  selectLeague,
  selectedHomeTeam,
  selectHomeTeam,
  selectedAwayTeam,
  selectAwayTeam,
}) => {
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((response) => {
      debugger;
      setCountries(response);
    });
  }, []);

  useEffect(() => {
    console.log(countries);
    debugger;
  }, [countries]);

  useEffect(() => {
    if (selectCountry) {
      leaguesService
        .getLeaguesByCountryId(selectCountry.id)
        .then((res) => setLeagues(res));
    }
  }, [selectedCountry.Id]);

  useEffect(() => {}, [selectedLeague]);

  useEffect(() => {
    showInputFieldsHandler(selectedHomeTeam.id, selectedAwayTeam.id);
  }, [selectedHomeTeam, selectedAwayTeam]);

  const selectCountryHandler = (countryId) => {
    selectCountry({ ...countries.find((x) => x.id === +countryId) });
  };

  const selectLeagueHandler = (leagueId) => {
    selectLeague({ ...leagues.find((x) => x.leagueId === +leagueId) });
  };

  const selectHomeTeamHandler = (homeTeamId) => {
    selectHomeTeam({ ...premierLeagueTeams.find((x) => x.id === +homeTeamId) });
  };

  const selectAwayTeamHandler = (awayTeamId) => {
    selectAwayTeam({ ...premierLeagueTeams.find((x) => x.id === +awayTeamId) });
  };

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <Container className="mt-3" style={{ width: "500px" }}>
      {countries && (
        <DropdownButton
          variant="secondary"
          title={selectedCountry.countryName || "--- Select Country ---"}
          onSelect={(e) => selectCountryHandler(e)}
        >
          {countries.map((x) => (
            <Dropdown.Item variant="secondary" key={x.id} eventKey={x.id}>
              {x.countryName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}

      {!isEmpty(selectedCountry) && (
        <DropdownButton
          className="mt-3"
          variant="secondary"
          title={selectedLeague.leagueName || "--- Select League ---"}
          onSelect={(e) => selectLeagueHandler(e)}
        >
          {leagues.map((x) => (
            <Dropdown.Item
              variant="secondary"
              key={x.leagueId}
              eventKey={x.leagueId}
            >
              {x.leagueName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
      {!isEmpty(selectedCountry) && !isEmpty(selectedLeague) && (
        <Row className="m-3" style={{ justifyContent: "center" }}>
          <DropdownButton
            className="mr-1"
            variant="secondary"
            title={selectedHomeTeam.name || "--- Select Home Team ---"}
            onSelect={(e) => selectHomeTeamHandler(e)}
          >
            {premierLeagueTeams
              .filter((x) => x.id !== selectedAwayTeam.id)
              .map((x) => (
                <Dropdown.Item variant="secondary" key={x.id} eventKey={x.id}>
                  {x.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>

          <DropdownButton
            className="ml-1"
            variant="secondary"
            title={selectedAwayTeam.name || "--- Select Away Team ---"}
            onSelect={(e) => selectAwayTeamHandler(e)}
          >
            {premierLeagueTeams
              .filter((x) => x.id !== selectedHomeTeam.id)
              .map((x) => (
                <Dropdown.Item variant="secondary" key={x.id} eventKey={x.id}>
                  {x.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Row>
      )}
    </Container>
  );
};

export default CascadeDropDownMenu;
