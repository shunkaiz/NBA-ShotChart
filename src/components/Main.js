import React from 'react';
import {ShotChart} from "./ShotChart";
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";

export class Main extends React.Component{
    state = {
        playerInfo : {
            playerId : nba.findPlayer('Lebron James').playerId
        }
    }

    componentDidMount(){
        this.updatePlayerInfo('Lebron James');
    }

    componentDidUpdate(){

    }

    updatePlayerInfo = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=>{
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({playerInfo});
        });
    }

    render(){
        return(
            <div className='dashBoard'>
                <div className='searchBlock'><SearchBar updatePlayerInfo = {this.updatePlayerInfo}/></div>
                <div className='player'>
                    <Profile playerInfo = {this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>

        );
    }

}