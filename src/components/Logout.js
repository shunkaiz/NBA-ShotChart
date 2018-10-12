import {Button} from 'antd'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export class Logout extends Component{

    render(){

        return(
            <Link to='/'>
                <Button type={'primary'} onClick={()=>{
                    window.localStorage.clear();
                    window.location.href = '/';
                }}>Logout</Button>
            </Link>
        )
    }
}