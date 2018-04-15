import React from 'react';
import {ShotChart} from "./ShotChart";
export class Main extends React.Component{
    render(){
        const id = 2544;
        return(

            <ShotChart playerId={id}/>
        );
    }

}