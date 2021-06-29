import React from "react";
import styles from "./SingleGameInfo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SingleGameInfo = (props) => {
  const history = useHistory();

  const redirectToH2H = () => {
    history.push("/head2head/111/333");
  };

  return (
    <tr style={{ cursor: "pointer" }}>
      <td style={{ width: "40%" }}>{props.homeTeamName}</td>
      <td onClick={redirectToH2H} style={{ width: "20%" }}>
        {props.kickOff}
      </td>
      <td style={{ width: "40%" }}>{props.awayTeamName}</td>
    </tr>
  );
};

export default SingleGameInfo;
