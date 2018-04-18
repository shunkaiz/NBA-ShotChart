import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";

export class DataViewContainer extends React.Component{
    state = {
        minCount : 2
    }

    onCountSliderChange = (val) =>{
        this.setState({minCount : val});
    }

    render(){
        return(
            <div className='dataView'>
                <ShotChart playerId={this.props.playerId} minCount = {this.state.minCount}/>
                <CountSlider onCountSliderChange ={this.onCountSliderChange}/>
            </div>

        );
    }

}