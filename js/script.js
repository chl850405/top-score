var getPlayerImage = function() {
    console.log("getPlayerImage function was called");
};

var getPlayerInfo = function(playerName) {
    console.log("getPlayerInfo function was called")

    fetch("https://free-nba.p.rapidapi.com/players/?search=" + playerName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "2f5cbcf79cmsh2c6b14556e0ef95p1c7ef7jsn4d5c277bb0a5"
	}
    })
    // array logged in the console
    .then(response => {
        response.json()
            .then(function(data) {
            console.log(data);
            displayPlayerInfo(data, playerName);
        });
    })
    .catch(err => {
        console.error(err);
    });
};
// var displayPlayerInfo = function(repos, searchTerm) {
var displayPlayerInfo = function(playerInfo, searchTerm) {
    console.log(playerInfo); // Array of results for player(s)
    console.log(searchTerm); // Name used to search

    // var playerId = indexOf(playerInfo.searchTerm);  // This does not work but indexOf() may be part of solution?
    // console.log(playerId);
    // var playerFirstName = playerInfo.first_name;
    // console.log(playerFirstName); 

    // format player name
    //var playerFullName = playerInfo[].player.first_name + " " + playerInfo[].player.last_name;
};

getPlayerImage();
getPlayerInfo("Qi");