import React from 'react';
import {AddPlayerButton} from './AddPlayerButton'
import {PEOPLE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants";
import {PlayerInfoTable} from "./PlayerInfoTable";

export class Profile extends React.Component{

    state = {
        isMultiple : false
    }

    handleAddPlayer = (playerName) =>{
        console.log('accept onclick');
        this.props.addComparePlayer(playerName);
        this.setState({
            isMultiple: true
        })
    };

    render(){
        console.log(this.props.playerInfo);
        const {
            teamAbbreviation,
            playerId,
        } = this.props.playerInfo;

        return(
            <div className='profile'>
                <div>
                    <h2>{this.props.playerInfo.playerName}</h2>
                    <img src={`${PEOPLE_PIC_URL_PREFIX}/${playerId}.png`} className='profilePic'/>
                    <AddPlayerButton logoUrl = {`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                                     addPlayerHandler = {this.handleAddPlayer}/>
                </div>

                {this.state.isMultiple?
                    (<div>
                        <h2>{this.props.playerInfo.playerName}</h2>
                        <img src={`${PEOPLE_PIC_URL_PREFIX}/${playerId}.png`} className='profilePic'/>
                    </div>)
                    :(<PlayerInfoTable playerInfo = {this.props.playerInfo}/>)}
            </div>
        );
    }
}