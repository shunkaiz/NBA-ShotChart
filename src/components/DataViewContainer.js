import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        minCount : 2,
        charType : 'hexbin'
    }

    onCountSliderChange = (val) =>{
        this.setState({minCount : val});
    }

    onChartTypeChange = (val) => {
        this.setState({charType:val.target.value});
    }

    render(){
        return(
            <div className='dataView'>
                <ShotChart playerId={this.props.playerId} minCount = {this.state.minCount} charType = {this.state.charType}/>
                <div className='filters'>
                    <CountSlider onCountSliderChange ={this.onCountSliderChange}/>
                    <RadioGroup onChange={this.onChartTypeChange}>
                        <Radio value={'hexbin'}>Hexbin</Radio>
                        <Radio value={'scatter'}>Scatter</Radio>
                    </RadioGroup>
                </div>
            </div>

        );
    }

}