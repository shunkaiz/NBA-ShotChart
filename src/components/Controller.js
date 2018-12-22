import React from 'react'
import _ from "lodash";
import { Radio, Col, Row, Switch, Menu, Dropdown, Icon, message} from 'antd';
import {connect} from 'react-redux'
import {CountSlider} from "./CountSlider";
import {ADD_PLAYER_ACTION, UPDATE_PLAYER_ACTION} from "../constants";
const RadioGroup = Radio.Group;
class RawController extends React.Component{

    constructor(){
        super();
        this.onSelected = 0;
    }

    // change current selected player's shot count
    onCountSliderChange = (val) =>{
        this.props.changeShotCount(val, this.onSelected);
    };

    onChartTypeChange = (val) =>{
        this.props.changeShotType(val.target.value, this.onSelected);
    };

    onToolTipChange = () => {
        this.props.toggleShotTips(this.onSelected);
    };

    render(){
        const onClick = ({ key }) => {
            this.onSelected = key;
            this.props.updateOnSelected(key);
            message.info(`Select on player ${key}`);
        };
        const menu = (
            <Menu onClick={onClick}>
                {this.props.players.map( (info, idx) => {
                    return(<Menu.Item key={idx}> {info.playerInfo.playerName}</Menu.Item>)
                })}
            </Menu>
        );


        return(
            <div className='filters'>
                <Dropdown overlay={menu}>
                    <a className="dropdown-link" href="#">
                        Hover me, select the player(s) <Icon type="down" />
                    </a>
                </Dropdown>
                <CountSlider onCountSliderChange ={_.debounce(this.onCountSliderChange, 500)}/>
                <br/>
                <Row>
                    <Col span={12}>
                        <RadioGroup onChange={this.onChartTypeChange}>
                            <Radio value={'hexbin'}>Hexbin</Radio>
                            <Radio value={'scatter'}>Scatter</Radio>
                        </RadioGroup>
                    </Col>
                    <Col span={12}>
                        <span>ToolTips  </span>
                        <Switch checkedChildren= 'On'
                                unCheckedChildren= 'Off'
                                onChange={this.onToolTipChange}

                                defaultChecked />
                    </Col>
                </Row>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        players: state
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        changeShotCount: (count, idx) =>{
            dispatch({
                type: UPDATE_PLAYER_ACTION,
                playerAttr: "shotCount",
                playerIdx: idx,
                value: count
            })
        },
        changeShotType: (type, idx) =>{
            dispatch({
                type: UPDATE_PLAYER_ACTION,
                playerAttr: "shotType",
                playerIdx: idx,
                value: type
            })
        },
        toggleShotTips: (idx)=>{
            dispatch({
                type: UPDATE_PLAYER_ACTION,
                playerAttr: "shotTip",
                playerIdx: idx,
            })
        }
    }
};

export const Controller = connect(mapStateToProps, mapDispatchToProps)(RawController);
