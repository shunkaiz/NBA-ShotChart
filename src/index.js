import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter, Switch} from "react-router-dom"
import LoginExport from './components/Login'
import {Logout} from './components/Logout'
import {ADD_PLAYER_ACTION, REMOVE_PLAYER_ACTION, INIT_PLAYER_ACTION, UPDATE_PLAYER_ACTION} from "./constants";
import {playerConstructor} from "./dataHelper";
import {Provider} from 'react-redux'
import  {createStore} from 'redux'




function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/login' component={LoginExport}/>
                <Route path='/logout' component={Logout}/>
            </Switch>
        </BrowserRouter>
    )
}

function Project(){
    return(
        <Routes/>
    )
}

const projectReducer = (state = [], action) =>{
    if(action.type === INIT_PLAYER_ACTION){
        // console.log(action.playerInfo);
        return[
            ...state,
            playerConstructor(action.playerInfo)
        ];
    }
    else if(action.type === ADD_PLAYER_ACTION){
        // console.log(action.playerInfo);
        return [
            ...state,
            playerConstructor(action.playerInfo)
        ]
    }
    else if(action.type === UPDATE_PLAYER_ACTION){
        switch (action.playerAttr){
            case "shotCount":
                state[action.playerIdx].minCount = action.value;
                console.log(state[action.playerIdx].minCount);
                break;
            case "shotType":
                state[action.playerIdx].charType = action.value;
                break;
            case "shotTip":
                state[action.playerIdx].disPlayToolTip = !state[action.playerIdx].disPlayToolTip;
                break;
            case "updatePlayer":
                state[action.playerIdx] = playerConstructor(action.playerInfo);
                break;
            default:
                break;
        }
        return [
            ...state
        ];
    }
    else if(action.type === REMOVE_PLAYER_ACTION){
        state.splice([action.playerIdx], 1);
        return [
            ...state
        ];
    }
    else{
        return state;
    }
};

const store = createStore(projectReducer);
console.log(store);


ReactDOM.render(
    <Provider store={store}>
        <Project/>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
