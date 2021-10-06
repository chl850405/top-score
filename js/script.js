// Global variables
var playerInputFieldEl = document.querySelector("#search");
var searchButtonEl = document.querySelector("#search-button");
var playerNameEl = document.querySelector("#full-name");
var teamNameEl = document.querySelector("#team-name");
var playerPositionEl = document.querySelector("#player-position");
var conferenceDivisionEl = document.querySelector("#conference-division");


var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var searchPlayer = playerInputFieldEl.value.trim();
    console.log("You searched for: " + searchPlayer);

    if(searchPlayer) {
        console.log("inside if");
        getPlayerInfo(searchPlayer);

        // clear old content from input field
        playerInputFieldEl.value = "";
        console.log("THIS IS AFTER THE CLEAR");

        // add the new player as a button
        //createPlayerButtons(searchPlayer);
    
    } else {
        alert("Please enter a valid city name.");
    }
    console.log(event);
}


var createPlayerButtons = function() {
    console.log("you called the createPlayerButtons function");
}


// API fetch to freeNBA API
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


// Function stub
var getPlayerImage = function() {
    console.log("getPlayerImage function was called");
};

// var displayPlayerInfo = function(repos, searchTerm) {
var displayPlayerInfo = function(playerInfo, searchTerm) {
    
    // Array of results for player(s) - could be more than one if they have the same name
    console.log(playerInfo); 

    // Id # of player (specific to API dataset, but could be used in random())
    console.log("Player's freeNBA API Id: " + playerInfo.data[0].id);

    // Player's first name and last name
    console.log("Player's first and last name: " + playerInfo.data[0].first_name + " " + playerInfo.data[0].last_name); 
    playerNameEl.textContent = playerInfo.data[0].first_name + " " + playerInfo.data[0].last_name;

    // Player's full team name
    console.log("Player's full team name: " + playerInfo.data[0].team.full_name);
    teamNameEl.textContent = playerInfo.data[0].team.full_name;

    // Player's position
    console.log("Player's position abbreviation: " + playerInfo.data[0].position);
    playerPositionEl.textContent = playerInfo.data[0].position;

    // Player's conference and division
    console.log("Player's conference and division: " + playerInfo.data[0].team.conference + " Conference, " + playerInfo.data[0].team.division + " Division");
    conferenceDivisionEl.textContent = playerInfo.data[0].team.conference + " / " + playerInfo.data[0].team.division;
};


getPlayerImage();
//getPlayerInfo("Qi");

searchButtonEl.addEventListener("click", formSubmitHandler); 




// var searchedPlayerEl = document.getElementById("searchPlayer")

// function saveButton() {
//   if (localStorage.saveButton) {
//     localStorage.saveButton = playerInfo(localStorage.saveButton)
//   } 
// console.log(saveButton)
// }

// function searchButton() {
//   var searchTerm = searchedPlayerEl.value;
//   getPlayerInfo(searchTerm)
//   localStorage.setItem('search', JSON.stringify(getPlayerInfo));
//   console.log(searchButton)
// }