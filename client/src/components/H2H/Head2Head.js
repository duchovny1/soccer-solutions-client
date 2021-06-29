import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import H2HStatisticsInfo from "./H2HStatisticsInfo";
import TeamCardStatisticsContainer from "./TeamCardStatisticsContainer";
import * as fixturesService from "../../services/fixturesService";

const Head2Head = () => {
  const StyledContainer = styled(Container)`
    padding: 0;
  `;
  const [fixtures, setFixtures] = useState([]);
  const [state, setState] = useState({
    head2head: {
      homeTeamId: 1,
      awayTeamId: 2,
    },
  });

  useEffect(() => {
    fixturesService.getFixtures().then((res) => setFixtures(res));
  }, []);

  return (
    <div>
      <StyledContainer>
        <div
          className="border-top border-dark"
          style={{
            backgroundColor: "#ede9e9",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TeamCard teamId={state.head2head.homeTeamId} />
          <H2HStatisticsInfo teams={state.head2head} />
          <TeamCard teamId={state.head2head.awayTeamId} />
        </div>
      </StyledContainer>
      <TeamCardStatisticsContainer
        className="mt-4"
        teamOneId={state.head2head.homeTeamId}
        teamTwoId={state.head2head.awayTeamId}
      />
      <Container className=" ow-8">
        <div className="row" style={{ height: "10%" }}>
          <Table className="table table-striped">
            <thead></thead>
            <tbody>
              {fixtures &&
                fixtures.map((x) => (
                  <tr key={x.id} className="d-sm-flex">
                    <th scope="col"></th>
                    <td className="col-1">SAT</td>
                    <td className="col-1">22:00</td>
                    <td className="col-1" style={{ float: "right" }}>
                      PL
                    </td>
                    <td className="col-1"></td>
                    <td className="col-2" style={{ float: "right" }}>
                      {x.homeTeam}
                    </td>
                    <td className="col-2">{x.result}</td>
                    <td className="col-3" style={{ float: "right" }}>
                      {x.awayTeam}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Head2Head;
