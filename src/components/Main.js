import React from 'react';
import {ShotChart} from "./ShotChart";
import nba from 'nba'
export class Main extends React.Component{
    state = {
        playerId : nba.findPlayer('Lebron James').playerId,
        playerInfo : {}
    }

    componentDidMount(){
        nba.stats.playerInfo({ PlayerID: this.state.playerId }).then((info)=>{
           console.log(info);
           const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
           this.setState({playerInfo});
        });


    }

    render(){
        const id = 2544;
        return(

            <ShotChart playerId={this.state.playerId}/>
        );
    }

}