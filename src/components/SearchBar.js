import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';



export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        //console.log(...nba.searchPlayers(value));
        this.setState({
            dataSource: !value ? [] :
                nba.searchPlayers(value).map( (player) => (player.fullName))
        });
    }
    onSelect = (value) =>{
        this.props.updatePlayerInfo(value);
    }
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
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
