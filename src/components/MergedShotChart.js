import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';
import * as constants from "../constants";

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class MergedShotChart extends React.Component {
    static propTypes = {
        playerId: PropTypes.number,
        minCount: PropTypes.number,
        charType : PropTypes.string
    };
    state = {
        mount : false
    }

    player1 = new Map();
    player2 = new Map();
    componentDidMount(){
        console.log('shotchart is updated');
        let playerOneShotDetails = initMap();
        let playerTwoShotDetails = initMap();

        nba.stats.shots({
            PlayerID: this.props.playerOneId
        }).then((response) => {
            playerOneShotDetails = response.shot_Chart_Detail.reduce((map, shot) => {
                if (map.has(shot.shotZoneArea)){
                    if(shot.shotMadeFlag) {
                        map.get(shot.shotZoneArea)[0] += 1;
                    }
                    map.get(shot.shotZoneArea)[1] += 1;
                }
                    // res.push({
                    //     x: (shot.locX + 250) / 10,
                    //     y: (shot.locY + 50) / 10,
                    //     action_type: shot.actionType,
                    //     shot_distance: shot.shotDistance,
                    //     shot_made_flag: shot.shotMadeFlag
                    // });
                return map;
            }, playerOneShotDetails);
        });

        nba.stats.shots({
            PlayerID: this.props.playerTwoId
        }).then((response) => {
            playerTwoShotDetails = response.shot_Chart_Detail.reduce((map, shot) => {
                if (map.has(shot.shotZoneArea)){
                    if(shot.shotMadeFlag) {
                        map.get(constants.SHOOTING_ZONE_CT)[0] += 1;
                    }
                    map.get(constants.SHOOTING_ZONE_CT)[1] += 1;
                }
                return map;
            }, playerTwoShotDetails);
        });
        console.log(playerOneShotDetails);
        console.log(playerTwoShotDetails);
        this.player1 = playerOneShotDetails;
        this.player2 = playerTwoShotDetails;
        this.setState({mount : true});
        // nba.stats.shots({
        //     PlayerID: this.props.playerOneId
        // }).then((response) => {
        //     console.log(response);
        //     const final_shots = response.shot_Chart_Detail.map(shot => ({
        //         x: (shot.locX + 250) / 10,
        //         y: (shot.locY + 50) / 10,
        //         action_type: shot.actionType,
        //         shot_distance: shot.shotDistance,
        //         shot_made_flag: 1,
        //     }));
        //
        //     const courtSelection = d3.select("#merged-shot-chart");
        //     courtSelection.html('');
        //     const chart_court = court().width(500);
        //     const chart_shots = shots().shotRenderThreshold(this.props.minCount).
        //     displayToolTips(this.props.toolTip).displayType(this.props.charType);
        //     courtSelection.call(chart_court);
        //     courtSelection.datum(final_shots).call(chart_shots);
        // });
    }

    render() {
        return (
            <div id="merged-shot-chart">
                <table>
                    <tbody>
                {Array.from(this.player1).map((key, value)=>{
                    console.log(key);
                    return <tr key={key}>
                        <td>{key}</td>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                    </tr>;
                })}
                    </tbody>
                    <tbody>
                    {Array.from(this.player2).map((value, key)=>{
                        return <tr key={key}>
                            <td>{key}</td>
                            <td>{value[0]}</td>
                            <td>{value[1]}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function initMap(){
    let playerMap = new Map();
    playerMap.set(constants.SHOOTING_ZONE_CT, [0,0]);
    playerMap.set(constants.SHOOTING_ZONE_L, [0,0]);
    playerMap.set(constants.SHOOTING_ZONE_R, [0,0]);
    playerMap.set(constants.SHOOTING_ZONE_LC, [0,0]);
    playerMap.set(constants.SHOOTING_ZONE_RC, [0,0]);
    return playerMap;
}