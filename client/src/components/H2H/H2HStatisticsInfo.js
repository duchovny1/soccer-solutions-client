import { useState, useEffect } from "react";
import styled from "styled-components";
import * as fixturesService from "../../services/fixturesService";
import { Container, Table } from "react-bootstrap";

const H2HStatisticsInfo = () => {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `;
  return (
    <div>
      <div className="col container">
        <StyledDiv>
          <table className="mt-5">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Total games between two teams:</strong> 23
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>HomeTeamName Wins:</strong> 13 Times
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>AwayTeamName Wins:</strong> 7 Times
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Games ended with draw:</strong> 14
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Total goals scored:</strong> 24 in 16 Games
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </StyledDiv>
      </div>
    </div>
  );
};

export default H2HStatisticsInfo;
