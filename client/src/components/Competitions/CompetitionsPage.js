import { Container } from "react-bootstrap";
import ClubDomesticTable from "./ClubDomesticTable/ClubDomesticTable";
import CompetitionsTable from "./CompetitionsTable";

const CompetitionsPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <CompetitionsTable
        title="Popular"
        style={{ marginLeft: "0", paddingLeft: "0" }}
      />
      <ClubDomesticTable />
      <CompetitionsTable
        title="Upcoming"
        style={{ marginRight: "0", paddingRight: "0" }}
      />
    </div>
  );
};

export default CompetitionsPage;
