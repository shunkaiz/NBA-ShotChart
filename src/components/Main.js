import React from 'react';
import {connect} from 'react-redux'
import nba from 'nba'
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import {
    DEFAULT_SEARCH_PLAER,
    ADD_PLAYER_ACTION,
    REMOVE_PLAYER_ACTION,
    INIT_PLAYER_ACTION,
    UPDATE_PLAYER_ACTION
} from '../constants'
import {getProfileData} from "../dataHelper";
import {Controller} from "./Controller";

class MainRaw extends React.Component{

    componentDidMount(){
        this.props.initPlayer();
        this.searchBar = React.createRef();
    }

    componentDidUpdate(){
        console.log(this.props.players);
    }


    // updatePlayerInfoRedux = (playerName, idx) =>{
    //     getProfileData(playerName).then((info)=>{
    //         console.log(info);
    //
    //
    //
    //         return info;
    //     });
    // };

    changeSelectedPlayer = (val) =>{
        if(this.state.onSelected !== val) {
            this.setState(prev => ({
                ...prev,
                onSelected: val
            }));
        }

    };


    updateSearchBarOnSelected = (key) =>{
        this.searchBar.current.updateSelected(key);
    };

    render(){
        return(
            <div className='dashBoard'>
                <div className='searchBlock'><SearchBar updatePlayer = {this.props.updatePlayer}
                ref = {this.searchBar}/></div>
                <div>
                    <Controller updateOnSelected = {this.updateSearchBarOnSelected}/>
                </div>
                {this.props.players.map((player, idx) => {
                    return (<div className='player' key={idx}>
                        <Profile {...player}
                                 addComparePlayer = {this.addComparePlayer}
                                 addStorePlayer = {this.props.addPlayer}
                                 removeStorePlayer = {this.props.removePlayer}
                                 changeSelectedPlayer = {this.changeSelectedPlayer}
                                 playerIdx = {idx}
                        />
                        <DataViewContainer {...player} playerIdx = {idx}/>
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
        },
        removePlayer: (idx) =>{
            dispatch({
                type: REMOVE_PLAYER_ACTION,
                playerIdx: idx
            })
        },
        updatePlayer: (idx, playerName) =>{
            getProfileData(playerName).then((info)=>{
                dispatch({
                    type: UPDATE_PLAYER_ACTION,
                    playerInfo: info,
                    playerIdx: idx,
                    playerAttr: "updatePlayer"
                });
            });
        }
    }
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainRaw);

