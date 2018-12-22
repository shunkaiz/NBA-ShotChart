import React from 'react';
import {AddPlayerButton} from './AddPlayerButton';
import {RemovePlayerButton} from './RemovePlayerButton'
import {ADD_PLAYER_ACTION, INIT_PLAYER_ACTION, PEOPLE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants";
import {PlayerInfoTable} from "./PlayerInfoTable";
import {getProfileData} from "../dataHelper";

export class Profile extends React.Component{

    // state = {
    //     isMultiple : false,
    // };

    // handleAddPlayer = (playerName) => {
    //     // if(!this.state.isMultiple) {
    //     //     this.props.addComparePlayer(playerName);
    //     //     this.setState({
    //     //         isMultiple: true
    //     //     })
    //     // }
    //     this.props.addStorePlayer(playerName);
    // };
    //
    handleRemovePlayer = () =>{
        this.props.removeStorePlayer(this.props.playerIdx);
    };

    render(){

        //console.log(this.props.playerInfo);
        const {
            teamAbbreviation,
            playerId,
        } = this.props.playerInfo;

        return(
            <div className='profile'>
                    <h2>{this.props.playerInfo.playerName}</h2>
                    <img src={`${PEOPLE_PIC_URL_PREFIX}/${playerId}.png`} className='profilePic'/>
                    {window.localStorage.length > 0? <AddPlayerButton
                        logoUrl = {`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                        addPlayerHandler = {this.props.addStorePlayer}
                        removePlayerHandler = {this.handleRemovePlayer}
                    />:null
                    }
                <PlayerInfoTable playerInfo = {this.props.playerInfo}/>
            </div>
        );
    }
}