import styled from "styled-components";
import * as flags from "../../utils/flags";

const CompetitionsTableRow = ({ competitionInfo }) => {
  const StyledTd = styled.td`
    justify-content: flex-start;
    display: flex;
    font-size: "18px";
  `;

  return (
    <tr>
      <StyledTd>
        {flags.flags[competitionInfo.code]} {competitionInfo.leagueName}
      </StyledTd>
    </tr>
  );
};

export default CompetitionsTableRow;
