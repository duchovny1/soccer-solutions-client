import styled from "styled-components";

const HeaderTable = ({ title }) => {
  const Styledh3 = styled.h3`
    height: 60px;
    background-color: #343a40;
    color: white;
    border-color: #454d55;
    font-family: "Helvetica Neue";
    font-weight: 400;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return <Styledh3>{title}</Styledh3>;
};

export default HeaderTable;
