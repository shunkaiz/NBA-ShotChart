import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class ShotChart extends React.Component {


    updateChart = ()=>{
        nba.stats.shots({
            PlayerID: this.props.playerId
        }).then((response) => {
            console.log(response);
            const final_shots = response.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10,
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.shotMadeFlag,
            }));

            const courtSelection = d3.select(`#shot-chart${this.props.playerIdx}`);
            courtSelection.html('');
            const chart_court = court().width(500);
            const chart_shots = shots().shotRenderThreshold(this.props.minCount).
            displayToolTips(this.props.toolTip).displayType(this.props.charType);
            courtSelection.call(chart_court);
            courtSelection.datum(final_shots).call(chart_shots);
        });
    }

    componentDidMount(){
        //console.log('shotchart is updated');
        this.updateChart();
    }

    // test reduce function
    componentDidUpdate(){
        this.updateChart();
    }

    render() {
        return (
            <div className="shot-chart" id={`shot-chart${this.props.playerIdx}`}/>
        );
    }
}
