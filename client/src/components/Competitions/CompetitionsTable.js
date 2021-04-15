import { Container } from "react-bootstrap";
import CompetitionsTableRow from "./CompetitionsTableRow";
import HeaderTable from "../Common/HeaderTable";

const CompetitionsPage = () => {
  const competitions = [
    {
      code: "GB",
      leagueName: "Premier League",
    },
    {
      code: "DE",
      leagueName: "Bundesliga",
    },
    {
      code: "ES",
      leagueName: "La Liga",
    },
    {
      code: "FR",
      leagueName: "Ligue 1",
    },
    {
      code: "NL",
      leagueName: "Eredivisie",
    },
    {
      code: "RU",
      leagueName: "Premier Ligue",
    },
    {
      code: "PT",
      leagueName: "Primeira Liga",
    },
    {
      code: "GBSCT",
      leagueName: "Premiership",
    },
    {
      code: "BE",
      leagueName: "First Division A",
    },
    {
      code: "UEFA",
      leagueName: "Champions League",
    },
    {
      code: "UEFA",
      leagueName: "Europe League",
    },
    {
      code: "UEFA",
      leagueName: "WC Qualification Europe",
    },
  ];

  return (
    <Container style={{ width: "400px" }}>
      <HeaderTable title="Popular" />
      <table className="table table-white table-striped table-bordered table-hover">
        <thead></thead>
        <tbody>
          {competitions.map((x) => {
            return <CompetitionsTableRow competitionInfo={x} />;
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default CompetitionsPage;
