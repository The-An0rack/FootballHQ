function preprocessPlayerStats(data) {
    data = data.response[0];

    let processedData = {};
    processedData.id = data.player.id;
    processedData.fName = data.player.firstname;
    processedData.lName = data.player.lastname;
    processedData.age = data.player.age;
    processedData.height = data.player.height;
    processedData.weight = data.player.weight;
    processedData.photo = data.player.photo;


    return processedData;
}

export default preprocessPlayerStats;