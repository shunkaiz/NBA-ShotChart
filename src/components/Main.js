import React from 'react';
import {connect} from 'react-redux'
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import {DEFAULT_SEARCH_PLAER, ADD_PLAYER_ACTION, REMOVE_PLAYER_ACTION, INIT_PLAYER_ACTION} from '../constants'
import {getProfileData} from "../dataHelper";

class MainRaw extends React.Component{
    state = {
        playerInfo : {
            playerId: 1
        }
    };

    componentDidMount(){
        // update player's information based on the given id
        this.updatePlayerInfo(DEFAULT_SEARCH_PLAER);
        // getProfileData(DEFAULT_SEARCH_PLAER).then((info)=>{
        //     console.log(info);
        //     store.dispatch({
        //         type: INIT_PLAYER_ACTION,
        //         playerInfo: info
        //     });
        // });
        this.props.initPlayer();
    }

    componentDidUpdate(){
        console.log(this.props.players);
    }

    addPlayerRedux = (playerName, idx) =>{
        const {store} = this.context;
        store.dispatch({
            type: ADD_PLAYER_ACTION,
            playerName: playerName,
            playerIdx: idx
        });
    };

    updatePlayerInfoRedux = (playerName, idx) =>{
        getProfileData(playerName).then((info)=>{
            console.log(info);



            return info;
        });
    };


    updatePlayerInfo = (playerName) =>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=>{
            //const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);

            const playerInfo = info.playerHeadlineStats[0];
            playerInfo.teamAbbreviation = info.commonPlayerInfo[0].teamAbbreviation;


            // console.log(info.commonPlayerInfo[0]);
            // console.log(info.playerHeadlineStats[0]);
            if (!'comparePlayerInfo' in this.state)
                this.setState({playerInfo});
            else{
                // bad design use redux
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

        this.updatePlayerInfoRedux(playerName);
    };

    addComparePlayer = (playerName) =>{
        console.log(this.props.players);
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
                {this.props.players.map((player, idx) => {
                    //console.log(player);
                    return (<div className='player' id={idx}>
                        <Profile {...player}
                                 addComparePlayer = {this.addComparePlayer}
                                 addStorePlayer = {this.props.addPlayer}
                                 removeComparePlayer = {this.removeComparePlayer}
                                 changeSelectedPlayer = {this.changeSelectedPlayer}
                        />
                        <DataViewContainer {...this.state}/>
                    </div>);
                })}

            </div>

        );
    }

}

// react redux

const mapStateToProps = function(state){
    return {
        players: state
    }
};

const mapDispatchToProps = function (dispatch) {
    return{
        initPlayer: ()=>{
            getProfileData(DEFAULT_SEARCH_PLAER).then((info)=>{
                dispatch({
                    type: INIT_PLAYER_ACTION,
                    playerInfo: info
                });
            });
        },
        addPlayer: (playerName)=>{
            getProfileData(playerName).then((info)=>{
                console.log(info);
                dispatch({
                    type: ADD_PLAYER_ACTION,
                    playerInfo: info
                });
            });
        }
    }
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainRaw);

