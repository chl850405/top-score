var getPlayerImage = function() {
  console.log("getPlayerImage function was called");
};

var getPlayerInfo = function(playerName) {
  console.log("getPlayerInfo function was called");

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
  
  // Array of results for player(s) - could be more than one if they have the same name
  console.log(playerInfo); 

  // Id # of player (specific to API dataset, but could be used in random())
  console.log("Player's freeNBA API Id: " + playerInfo.data[0].id);

  // Player's first name and last name
  console.log("Player's first and last name: " + playerInfo.data[0].first_name + " " + playerInfo.data[0].last_name); 

  // Player's position
  console.log("Player's position abbreviation: " + playerInfo.data[0].position);

  // Player's full team name
  console.log("Player's full team name: " + playerInfo.data[0].team.full_name);

  // Player's conference and division
  console.log("Player's conference and division: " + playerInfo.data[0].team.conference + " Conference, " + playerInfo.data[0].team.division + " Division");
  
};

getPlayerImage();
getPlayerInfo("Qi");
    console.log("getPlayerImage function was called");
};

