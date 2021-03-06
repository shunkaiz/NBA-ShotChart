import React from 'react'
import { Button } from 'antd';
import '../styles/AddPlayerButton.css'
import {DEFAULT_COMPARE_PLAYER} from "../constants";
export class AddPlayerButton extends React.Component{

    render(){
        return(
            <div className={'container'}>
                <img src={this.props.logoUrl} className={'teamLogo'} />
                <div className={'buttonBar'}>
                    <Button type="dashed" ghost shape={'circle'} size={'default'} className={'removeButton'}
                            onClick={()=>this.props.removePlayerHandler()}><b>-</b></Button>
                    <Button type="dashed" ghost shape={'circle'} size={'default'} className={'addButton'}
                            onClick={()=>this.props.addPlayerHandler(DEFAULT_COMPARE_PLAYER)}><b>+</b></Button>
                </div>
            </div>

        )
    }
}