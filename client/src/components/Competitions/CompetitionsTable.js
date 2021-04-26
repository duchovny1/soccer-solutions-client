import { Container } from "react-bootstrap";
import CompetitionsTableRow from "./CompetitionsTableRow";
import HeaderTable from "../Common/HeaderTable";
import styled from "styled-components";

const CompetitionsPage = ({ title, style }) => {
  const StyledContainer = styled(Container)`
    width: 250px;
  `;

  console.log(style);
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
    <StyledContainer style={style}>
      <HeaderTable title={title} />
      <table className="table table-white table-striped table-bordered table-hover">
        <thead></thead>
        <tbody>
          {competitions.map((x) => {
            return <CompetitionsTableRow competitionInfo={x} />;
          })}
        </tbody>
      </table>
    </StyledContainer>
  );
};

export default CompetitionsPage;
