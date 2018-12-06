import React from 'react';
import {ShotChart} from "./ShotChart";
import {CompareShotChart} from "./CompareShotChart"
import {MergedShotChart} from "./MergedShotChart";
import {CountSlider} from "./CountSlider";
import { Radio, Col, Row, Switch } from 'antd';
import _ from 'lodash'
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        minCount : 2,
        charType : 'hexbin',
        disPlayToolTip : true
    };

    onCountSliderChange = (val) =>{
        this.setState((prevState) =>
            ({
                ...prevState,
                minCount : val}));
    };

    onChartTypeChange = (val) => {
        this.setState((prevState) => ({
            ...prevState,
            charType:val.target.value}));
    };

    onToolTipChange = (val) =>{
        this.setState({disPlayToolTip : val});
        console.log(val);
    };
    render(){
        console.log('dataview changed');
        console.log(this.props.comparePlayerInfo);
        return(
            <div className='dataView'>
                <div className={this.props.comparePlayerInfo === undefined?null:'two-player'}>
                    <ShotChart playerId={this.props.playerInfo.playerId}
                               minCount = {this.state.minCount}
                               charType = {this.state.charType}
                               toolTip = {this.state.disPlayToolTip}
                    />
                </div>
                <div className={this.props.comparePlayerInfo === undefined?null:'two-player'}>
                {this.props.comparePlayerInfo === undefined ?null:
                    <CompareShotChart  playerId={this.props.comparePlayerInfo.playerId}
                                minCount = {this.state.minCount}
                                charType = {this.state.charType}
                                toolTip = {this.state.disPlayToolTip}/>
                    }
                </div>
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
                            <span>ToolTips  </span>
                            <Switch checkedChildren= 'On'
                                    unCheckedChildren= 'Off'
                                    onChange={this.onToolTipChange}

                                    defaultChecked />
                        </Col>
                    </Row>
                </div>
                <div className={this.props.comparePlayerInfo === undefined?null:'mergedView'}>
                    {this.props.comparePlayerInfo === undefined ?null:
                        <MergedShotChart  playerOneId={this.props.playerInfo.playerId}
                                          playerTwoId={this.props.comparePlayerInfo.playerId}
                                          />
                    }
                </div>

            </div>
        );
    }

}