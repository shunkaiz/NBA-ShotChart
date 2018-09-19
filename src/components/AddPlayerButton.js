import React from 'react'
import { Button } from 'antd';
import '../styles/AddPlayerButton.css'
import {DEFAULT_SEARCH_PLAER} from '../constants'
export class AddPlayerButton extends React.Component{

    render(){
        return(
            <div className={'container'}>
                <img src={this.props.logoUrl} className={'teamLogo'} />
                <Button type="dashed" ghost shape={'circle'} size={'default'} className={'addButton'}
                        onClick={()=>this.props.addPlayerHandler(DEFAULT_SEARCH_PLAER)}><b>+</b></Button>
            </div>

        )
    }
}