import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import { Radio, Col, Row, Switch, Menu, Dropdown, Icon, message} from 'antd';
import _ from 'lodash'
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{

    // onCountSliderChange = (val) =>{
    //     this.setState((prevState) =>
    //         ({
    //             ...prevState,
    //             minCount : val}));
    // };

    render(){
        console.log(this.props.playerInfo);
        return(
            <div className='dataView'>
                <ShotChart playerId={this.props.playerInfo.playerId}
                           minCount = {this.props.minCount}
                           charType = {this.props.charType}
                           toolTip = {this.props.disPlayToolTip}
                           playerIdx = {this.props.playerIdx}
                />
            </div>
        );
    }

}