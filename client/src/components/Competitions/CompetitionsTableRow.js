import styled from "styled-components";
import Flag from "react-flagkit";

const flags = {
  GB: <Flag className="ml-1 mr-2" country="GB-ENG" size={25} />,
  DE: <Flag className="ml-1 mr-2" country="DE" size={25} />,
  IT: <Flag className="ml-1 mr-2" country="IT" size={25} />,
  ES: <Flag className="ml-1 mr-2" country="ES" size={25} />,
  FR: <Flag className="ml-1 mr-2" country="FR" size={25} />,
  NL: <Flag className="ml-1 mr-2" country="NL" size={25} />,
  TR: <Flag className="ml-1 mr-2" country="TR" size={25} />,
  RU: <Flag className="ml-1 mr-2" country="RU" size={25} />,
  PT: <Flag className="ml-1 mr-2" country="PT" size={25} />,
  GBSCT: <Flag className="ml-1 mr-2" country="GB-SCT" size={25} />,
  BE: <Flag className="ml-1 mr-2" country="BE" size={25} />,
  UEFA: (
    <img
      className="ml-1 mr-2"
      style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
        position: "relative",
        right: "2px",
      }}
      src={
        "https://seeklogo.com/images/U/UEFA_Champions_league-logo-76E1E8D3FA-seeklogo.com.png"
      }
    />
  ),
};

const CompetitionsTableRow = ({ competitionInfo }) => {
  const StyledTd = styled.td`
    justify-content: flex-start;
    display: flex;
    font-size: "18px";
  `;

  return (
    <tr>
      <StyledTd>
        {flags[competitionInfo.code]} {competitionInfo.leagueName}
      </StyledTd>
    </tr>
  );
};

export default CompetitionsTableRow;
