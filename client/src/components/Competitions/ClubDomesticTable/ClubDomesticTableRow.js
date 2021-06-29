import * as flags from "../../../utils/flags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClubDomesticTableRow = ({ code, countryName }) => {
  const [shouldShowLeagues, setShouldShowLeagues] = useState(false);

  const StyledLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 20px;
    height: 50px;

    &:hover {
      color: white;
      background: #343a40;
    }
  `;

  return (
    <StyledLi>
      {flags.flags[code]} {countryName}{" "}
      <FontAwesomeIcon
        className="ml-2"
        icon={faPlusSquare}
        onClick={() => setShouldShowLeagues(!shouldShowLeagues)}
      />
      {shouldShowLeagues && (
        <div>
          <table>
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      )}
    </StyledLi>
  );
};

export default ClubDomesticTableRow;
