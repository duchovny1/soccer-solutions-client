import React, { Component, useState } from "react";
import LeagueGamesInfoHeader from "./LeaguesGamesInfoHeader";
import SingleGameInfo from "./SingleGameInfo";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamesPerSingleLeague.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
class GamesPerSingleLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areGamesShowed: props.index <= 2,
      hoverStyles:
        props.index <= 2
          ? {
              backgroundColor: "white",
              color: "#454d55",
            }
          : {},
    };
    this.handleShowGameClick = this.handleShowGameClick.bind(this);
    this.setHoverStyles = this.setHoverStyles.bind(this);

    if (this.state.areGamesShowed) {
      this.setHoverStyles();
    }
  }

  handleShowGameClick() {
    this.setState((prevState) => ({
      areGamesShowed: !prevState.areGamesShowed,
    }));

    this.setHoverStyles();
  }

  setHoverStyles() {
    this.setState((prevState) => ({
      hoverStyles: prevState.areGamesShowed
        ? {
            backgroundColor: "white",
            color: "#454d55",
          }
        : {},
    }));
  }

  render() {
    return (
      <div className={`${styles.tablewidth} ${styles.tablepos}`}>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className={`mb-0 ${styles.borderbtm}`}
        >
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr
              style={this.state.hoverStyles}
              onClick={this.handleShowGameClick}
            >
              <th colSpan="2" className={styles.borderrightnone}>
                {this.props.countryName} - {this.props.leagueName}
              </th>
              <th colSpan="1" className={styles.borderleftnone}>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </th>
            </tr>

            {this.state.areGamesShowed &&
              this.props.games.map((x) => {
                return (
                  <SingleGameInfo
                    kickOff={x.kickOff}
                    homeTeamName={x.homeTeamName}
                    awayTeamName={x.awayTeamName}
                  />
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default GamesPerSingleLeague;
