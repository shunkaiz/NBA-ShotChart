import React from 'react';
import {AddPlayerButton} from './AddPlayerButton';
import {RemovePlayerButton} from './RemovePlayerButton'
import {ADD_PLAYER_ACTION, INIT_PLAYER_ACTION, PEOPLE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants";
import {PlayerInfoTable} from "./PlayerInfoTable";
import {getProfileData} from "../dataHelper";

export class Profile extends React.Component{

    state = {
        isMultiple : false,
    };

    handleAddPlayer = (playerName) =>{
        if(!this.state.isMultiple) {
            this.props.addComparePlayer(playerName);
            this.setState({
                isMultiple: true
            })
        }
        this.addPlayerAction(playerName);
    };

    addPlayerAction = (playerName) =>{
        // const {store} = this.context;
        //         // getProfileData(playerName).then((info)=>{
        //         //     console.log(info);
        //         //     store.dispatch({
        //         //         type: ADD_PLAYER_ACTION,
        //         //         playerInfo: info
        //         //     });
        //         // });
        //store.subscribe(this.render);
    };



    handleRemovePlayer = () =>{
        this.props.removeComparePlayer();
        this.setState({
            isMultiple: false
        })
    };

    switchSelection = (val) =>{
        if(this.state.isMultiple)
            this.props.changeSelectedPlayer(val);
    };

    render(){

        //console.log(this.props.playerInfo);
        const {
            teamAbbreviation,
            playerId,
        } = this.props.playerInfo;

        return(
            <div className='profile'>
                <div onClick={()=>this.switchSelection(0)} className={this.props.onSelected === 0 ? 'selected-border':null}>
                    <h2>{this.props.playerInfo.playerName}</h2>
                    <img src={`${PEOPLE_PIC_URL_PREFIX}/${playerId}.png`} className='profilePic'/>
                    {window.localStorage.length > 0? < AddPlayerButton logoUrl = {`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                        addPlayerHandler = {this.handleAddPlayer}/>:null
                    }
                </div>

                {this.state.isMultiple && !(this.props.comparePlayerInfo === undefined)?
                    (<div onClick={()=>this.switchSelection(1)} className={this.props.onSelected === 1 ? 'selected-border':null}>
                        <h2>{this.props.comparePlayerInfo.playerName}</h2>
                        <img src={`${PEOPLE_PIC_URL_PREFIX}/${this.props.comparePlayerInfo.playerId}.png`} className='profilePic'/>
                        <RemovePlayerButton logoUrl = {`${TEAM_PIC_URL_PREFIX}/${this.props.comparePlayerInfo.teamAbbreviation}_logo.svg`}
                                         removePlayerHandler = {this.handleRemovePlayer}/>
                    </div>)
                    :(<PlayerInfoTable playerInfo = {this.props.playerInfo}/>)}
            </div>
        );
    }
}