import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PEOPLE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = (value) => {
        //console.log(...nba.searchPlayers(value));
        this.setState({
            dataSource: !value ? [] :
                nba.searchPlayers(value).map( ({ fullName, playerId }) =>
                    <Option key={playerId} value={fullName}>
                        <img className="player-option-image" src={`${PEOPLE_PIC_URL_PREFIX}/${playerId}.png`}/>
                        <span  className="player-option-label">{fullName}</span>
                    </Option>
                    ),
                });
    };
    onSelect = (value) =>{
        this.props.updatePlayerInfo(value);
    };
    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className = 'searchBar'
                size = 'large'
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Type NBA player name"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
