import React from 'react';
import logo from '../assets/nba-logoman-word-white.svg';
import {Icon} from 'antd'
export class TopNavBar extends React.Component{
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">Dashboard</div>
                <div className="Tool-bar">
                    <div className="Login-box">
                        <Icon type="user" theme="outlined" style={{ fontSize: '25px'}}/>
                    </div>
                </div>
            </header>
        );
    }
}