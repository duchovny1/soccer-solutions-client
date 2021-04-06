import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faCoffee, faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import styles from './LeaguesGamesInfoHeader.module.css';
class LeagueGamesInfoHeader extends Component {
     constructor(props){
        super(props);
        
        this.handleShowGameClick = this.handleShowGameClick.bind(this);

        this.state = {
           games: [],
           areGamesShowed: false
        }
     }
    
     handleShowGameClick()  {
        this.setState(prevState => ({
               areGamesShowed: !prevState.areGamesShowed
          }))
        console.log(this.state.areGamesShowed);
     }

     render() {
       return <div>
          <div className={styles.infoRow} onClick={this.handleShowGameClick}>
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