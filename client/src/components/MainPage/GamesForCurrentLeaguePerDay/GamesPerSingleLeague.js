import React, { Component, useState } from 'react'
import LeagueGamesInfoHeader from './LeaguesGamesInfoHeader';
import SingleGameInfo from './SingleGameInfo';

class GamesPerSingleLeague extends Component {
     constructor(props){
         super(props)
         this.state = {
             games: [],
             areGamesShowed: false
            }
            this.handleShowGameClick = this.handleShowGameClick.bind(this);
        }
     
    handleShowGameClick() {
        this.setState(prevState => ({
            areGamesShowed: !prevState.areGamesShowed
       }))
    }

    render() { return <div>
               <div onClick={this.handleShowGameClick}>
                  <LeagueGamesInfoHeader/>
               </div>
             {this.state.areGamesShowed && <SingleGameInfo/>}
        </div>
    }
}

export default GamesPerSingleLeague;