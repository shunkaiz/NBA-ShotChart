import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';
import * as constants from "../constants";
import {PLAYER_ONE_INDEX} from "../constants";
import {PLAYER_TWO_INDEX} from "../constants";

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class MergedShotChart extends React.Component {
    static propTypes = {
        playerId: PropTypes.number,
        minCount: PropTypes.number,
        charType : PropTypes.string
    };

    state = {
        mount : false
    };

    player1 = new Map();
    player2 = new Map();

    componentDidMount(){
        this.setState({mount : true});
    }


    componentDidUpdate(){
        let playerOneShotDetails = initMap();
        let playerTwoShotDetails = initMap();
        let playerOneName, plaerTwoName;
        // calculate maps to store shot percentage in each zone for both players
        nba.stats.shots({
            PlayerID: this.props.playerOneId
        }).then((response) => {
            playerOneShotDetails = response.shot_Chart_Detail.reduce((map, shot) => {
                if(playerOneName === undefined) {playerOneName = shot.playerName;}
                if (map.has(shot.shotZoneArea)){
                    if(shot.shotMadeFlag) {
                        map.get(shot.shotZoneArea)[0] += 1;
                    }
                    map.get(shot.shotZoneArea)[1] += 1;
                }

                return map;
            }, playerOneShotDetails);

            nba.stats.shots({
                PlayerID: this.props.playerTwoId
            }).then((response) => {
                playerTwoShotDetails = response.shot_Chart_Detail.reduce((map, shot) => {
                    if(plaerTwoName === undefined){plaerTwoName = shot.playerName;}
                    if (map.has(shot.shotZoneArea)){
                        if(shot.shotMadeFlag) {
                            map.get(shot.shotZoneArea)[0] += 1;
                        }
                        map.get(shot.shotZoneArea)[1] += 1;
                    }
                    return map;
                }, playerTwoShotDetails);
                console.log(playerOneShotDetails);
                console.log(playerTwoShotDetails);

                // generate a filter map store the best player among the 5 zones on court
                let filterMap = initMap();
                playerOneShotDetails.forEach((value, key)=>{
                    //console.log(playerOneShotDetails.get(key));
                    let value1 = playerOneShotDetails.get(key);
                    let p1, p2;
                    let value2 = playerTwoShotDetails.get(key);

                    if(value1[1] === 0){p1 = 0;}
                    else {p1 = value1[0]/value1[1];}

                    if(value2[1]=== 0){p2 = 0;}
                    else{p2 = value2[0]/value2[1];}
                    //console.log(p1, p2, value1[0], value1[1], value2[0], value2[1]);
                    if(p1 < p2){ filterMap.set(key, PLAYER_ONE_INDEX); }
                    else {filterMap.set(key, PLAYER_TWO_INDEX);}
                });
                //console.log(filterMap);

                this.player1 = playerOneShotDetails;
                this.player2 = playerTwoShotDetails;

                nba.stats.shots({
                    PlayerID: this.props.playerOneId
                }).then((response) => {
                    //console.log(response);
                    const filteredPlayerOneShots = response.shot_Chart_Detail.reduce( (res, shot) => {
                        if( filterMap.get(shot.shotZoneArea) === PLAYER_ONE_INDEX) {
                            res.push({
                                x: (shot.locX + 250) / 10,
                                y: (shot.locY + 50) / 10,
                                action_type: playerOneName + " " + shot.actionType,
                                shot_distance: shot.shotDistance,
                                shot_made_flag: 0,
                            });
                        }
                        return res;
                    }, []);
                    const filteredPlayerTwoShots = response.shot_Chart_Detail.reduce((res, shot) => {
                        if( filterMap.get(shot.shotZoneArea) === PLAYER_TWO_INDEX) {
                            res.push({
                                x: (shot.locX + 250) / 10,
                                y: (shot.locY + 50) / 10,
                                action_type: plaerTwoName + " " + shot.actionType,
                                shot_distance: shot.shotDistance,
                                shot_made_flag: 1,
                            })
                        }
                        return res;
                    }, []);
                    const final_shots = filteredPlayerOneShots.concat(filteredPlayerTwoShots);
                    const courtSelection = d3.select("#merged-shot-chart");
                    courtSelection.html('');
                    const chart_court = court().width(500);
                    const chart_shots = shots().shotRenderThreshold(constants.MERGED_GRAPH_MIN_COUNT).displayToolTips(true).displayType('scatter');
                    courtSelection.call(chart_court);
                    courtSelection.datum(final_shots).call(chart_shots);
                });

            });


        });

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