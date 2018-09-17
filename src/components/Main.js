import React from 'react';
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import {DEFAULT_SEARCH_PLAER} from '../constants'
export class Main extends React.Component{
    state = {
        playerInfo : {
            playerId : nba.findPlayer(DEFAULT_SEARCH_PLAER).playerId
        }
    };

    componentDidMount(){
        // update player's information based on the given id
        this.updatePlayerInfo(DEFAULT_SEARCH_PLAER);
    }

    componentDidUpdate(){

    }



    updatePlayerInfo = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=>{
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({playerInfo});
        });
    };

    addComparePlayer = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=>{
            const newPlayerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState(prev=>({
                ...prev.playerInfo,
                comparePlayer : newPlayerInfo
            }));
        });
    }

    render(){
        return(
            <div className='dashBoard'>
                <div className='searchBlock'><SearchBar updatePlayerInfo = {this.updatePlayerInfo}/></div>
                <div className='player'>
                    <Profile playerInfo = {this.state.playerInfo} addComparePlayer = {this.addComparePlayer} />
                    {/*<DataViewContainer playerId={this.state.playerInfo.playerId}/>*/}
                </div>
            </div>

        );
    }

}