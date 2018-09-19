import React from 'react'
import { Button } from 'antd';
import '../styles/RemovePlayerButton.css'
export class RemovePlayerButton extends React.Component{

    render(){
        return(
            <div className={'container'}>
                <img src={this.props.logoUrl} className={'teamLogo'} />
                <Button type="dashed" ghost shape={'circle'} size={'default'} className={'removeButton'}
                        onClick={()=>this.props.removePlayerHandler()}><b>-</b></Button>
            </div>

        )
    }
}