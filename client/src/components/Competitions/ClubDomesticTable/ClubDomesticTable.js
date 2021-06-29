import { Container } from "react-bootstrap";
import HeaderTable from "../../Common/HeaderTable";
import * as flags from "../../../utils/flags";
import ClubDomesticTableRow from "./ClubDomesticTableRow";
import styled from "styled-components";
import { useEffect, useState } from "react";
import * as countriesService from "../../../services/countriesService";

const ClubDomesticTable = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((res) => setCountries(res));
  }, []);

  return (
    <Container>
      <HeaderTable title="Club Domestic" />
      <ul>
        {countries &&
          countries.map((x) => {
            return (
              <div>
                <ClubDomesticTableRow
                  key={x.id}
                  code={x.code}
                  countryName={x.countryName}
                />
              </div>
            );
          })}
      </ul>
    </Container>
  );
};

export default ClubDomesticTable;
