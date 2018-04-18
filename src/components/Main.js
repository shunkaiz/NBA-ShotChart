import React from 'react';
import {ShotChart} from "./ShotChart";
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";

export class Main extends React.Component{
    state = {
        playerInfo : {
            playerId : nba.findPlayer('Lebron James').playerId
        }
    }

    componentDidMount(){
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Lebron James').playerId }).then((info)=>{
           console.log(info);
           const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
           this.setState({playerInfo});
        });
    }

    render(){
        return(
            <div className='dashBoard'>
                <Profile playerInfo = {this.state.playerInfo} />
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
            </div>

        );
    }

}