import React from "react";
import styles from "./SingleGameInfo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleGameInfo = (props) => {
  return (
    <tr>
      <td style={{ width: "40%" }}>{props.homeTeamName}</td>
      <td style={{ width: "20%" }}>{props.kickOff}</td>
      <td style={{ width: "40%" }}>{props.awayTeamName}</td>
    </tr>
  );
};

export default SingleGameInfo;
