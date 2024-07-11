function preprocessFixturesData(data) {
    data = data.response;
    // const extractKeys = ({id, date} =>)
    let processedData = data.map( (item) => {
        let obj = {};
        obj.id = item.fixture.id;
        obj.date = item.fixture.date;
        obj.leagueName = item.league.name;
        obj.leagueRound = item.league.round;
        obj.homeTeamName = item.teams.home.name;
        obj.awayTeamName = item.teams.away.name;
        obj.homeTeamLogo = item.teams.home.logo;
        obj.awayTeamLogo = item.teams.away.logo;
        obj.homeGoals = item.goals.home;
        obj.awayGoals = item.goals.away;
        return obj;
    });
    return processedData;
}

export default preprocessFixturesData;