import React from 'react';
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import {DEFAULT_SEARCH_PLAER} from '../constants'
export class Main extends React.Component{
    state = {
        playerInfo : {
            playerId: 1
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
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            if (!'comparePlayerInfo' in this.state)
                this.setState({playerInfo});
            else{
                if (this.state.onSelected === 1) {
                    this.setState(prev => ({
                        playerInfo : prev.playerInfo,
                        comparePlayerInfo: playerInfo,
                        onSelected: 1
                    }));
                }
                else
                    this.setState(prev=>({
                        playerInfo : playerInfo,
                        comparePlayerInfo: prev.comparePlayerInfo,
                        onSelected : prev.onSelected
                    }));
            }
        });
    };

    addComparePlayer = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=>{
            const newPlayerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState(prev=>({
                playerInfo : prev.playerInfo,
                comparePlayerInfo : newPlayerInfo,
                onSelected: 1
            }));
        });
    };

    removeComparePlayer = () =>{
          this.setState(prev=>({
              prevInfo : prev.playerInfo,
              comparePlayerInfo: undefined,
              onSelected : undefined
          }));
    };

    changeSelectedPlayer = (val) =>{
        if(this.state.onSelected !== val) {
            this.setState(prev => ({
                ...prev,
                onSelected: val
            }));
        }
    };

    render(){
        return(
            <div className='dashBoard'>
                <div className='searchBlock'><SearchBar updatePlayerInfo = {this.updatePlayerInfo}/></div>
                <div className='player'>
                    <Profile {...this.state} addComparePlayer = {this.addComparePlayer} removeComparePlayer = {this.removeComparePlayer}
                             changeSelectedPlayer = {this.changeSelectedPlayer}
                    />
                    <DataViewContainer {...this.state}/>
                </div>
            </div>

        );
    }

}