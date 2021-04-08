import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faCoffee, faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import styles from './LeaguesGamesInfoHeader.module.css';
class LeagueGamesInfoHeader extends Component {
     constructor(props){
        super(props);

        this.state = {
           games: [],
           areGamesShowed: false
        }
     }

     render() {
       return <div>
          <div className={styles.infoRow}>
          <div>
          <FontAwesomeIcon icon={faFlagUsa} className={styles.iconcolor}/>
          </div>
          <div className={styles.infoLeagueHeader}>England - Championship</div>
          <div className={styles.ml80}>
             <FontAwesomeIcon icon={faArrowAltCircleRight}/>
          </div>
        </div>
          {this.state.areGamesShowed && <span>TODO maping games to list of components</span>}
        </div>
     }
}

export default LeagueGamesInfoHeader;