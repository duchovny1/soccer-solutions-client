import { Container } from "react-bootstrap";
import HeaderTable from "../../Common/HeaderTable";
import * as flags from "../../../utils/flags";
import ClubDomesticTableRow from "./ClubDomesticTableRow";
import styled from "styled-components";

const ClubDomesticTable = ({ countries }) => {
  const StyledContainer = styled(Container)``;

  return (
    <Container>
      <HeaderTable title="Club Domestic" />
      <ul>
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
        <ClubDomesticTableRow />
      </ul>
    </Container>
  );
};

export default ClubDomesticTable;
