import nba from 'nba'


const getProfileData = (playerName) =>{

    return new Promise((resolve, reject)=>{
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info)=> {
            const playerInfo = info.playerHeadlineStats[0];
            playerInfo.teamAbbreviation = info.commonPlayerInfo[0].teamAbbreviation;
            resolve(playerInfo);
        });
    });
};


const playerConstructor = (playerInfo) =>{
    let res = {
        onSelected: true,
        minCount : 2,
        charType : 'hexbin',
        disPlayToolTip : true
    };
    res.playerInfo =  Object.assign(playerInfo, res);
    return res;
};

export {getProfileData, playerConstructor};