import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import { Radio, Col, Row, Switch, Icon } from 'antd';
import _ from 'lodash'
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        minCount : 2,
        charType : 'hexbin',
        disPlayToolTip : true
    }

    onCountSliderChange = (val) =>{
        this.setState({minCount : val});
    }

    onChartTypeChange = (val) => {
        this.setState({charType:val.target.value});
    }

    onToolTipChange = (val) =>{
        this.setState({disPlayToolTip : val});
        console.log(val);
    }
    render(){
        return(
            <div className='dataView'>
                <ShotChart playerId={this.props.playerId}
                           minCount = {this.state.minCount}
                           charType = {this.state.charType}
                           toolTip = {this.state.disPlayToolTip}/>
                <div className='filters'>
                    {this.state.charType === 'hexbin' ?
                        <CountSlider onCountSliderChange ={_.debounce(this.onCountSliderChange, 500)}/>
                    : null
                    }
                    <br/>
                    <Row>
                        <Col span={12}>
                            <RadioGroup onChange={this.onChartTypeChange}>
                                <Radio value={'hexbin'}>Hexbin</Radio>
                                <Radio value={'scatter'}>Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={4}>
                            <Switch checkedChildren= 'On'
                                    unCheckedChildren= 'Off'
                                    onChange={this.onToolTipChange}

                                    defaultChecked />
                        </Col>
                    </Row>


                </div>
            </div>

        );
    }

}