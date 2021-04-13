import React from "react";
import styles from "./SingleGameInfo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SingleGameInfo = (props) => {
  return (
    <tr>
      <td style={{ width: "40%" }}>{props.homeTeamName}</td>
      <td style={{ width: "20%" }}>
        <Link to={`/head2head/111/333`}>{props.kickOff}</Link>
      </td>
      <td style={{ width: "40%" }}>{props.awayTeamName}</td>
    </tr>
  );
};

export default SingleGameInfo;
