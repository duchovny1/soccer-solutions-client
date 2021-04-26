import * as flags from "../../../utils/flags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClubDomesticTableRow = () => {
  const [shouldShowLeagues, setShouldShowLeagues] = useState(false);

  const StyledLi = styled.li`
    list-style-type: none;
    height: 40px;
  `;

  return (
    <StyledLi>
      {flags.flags["GB"]} England{" "}
      <FontAwesomeIcon
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
