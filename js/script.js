// Global variables
var playerInputFieldEl = document.querySelector("#search");
var searchButtonEl = document.querySelector("#search-button");
var playerNameEl = document.querySelector("#full-name");
var teamNameEl = document.querySelector("#team-name");
var playerPositionEl = document.querySelector("#player-position");
var conferenceDivisionEl = document.querySelector("#conference-division");
var myTeamEl = document.querySelector("#my-team");
var saveButtonEl = document.querySelector("#save-button");
var randomButtonEl = document.querySelector("#random-button");

var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var searchPlayer = playerInputFieldEl.value.trim();
    console.log("You searched for: " + searchPlayer);

    if(searchPlayer) {
        console.log("inside if");
        getPlayerInfo(searchPlayer);
        getPlayerImage(searchPlayer);

        // clear old content from input field
        playerInputFieldEl.value = "";
        console.log("THIS IS AFTER THE CLEAR");

        // add the new player as a button
        //createPlayerButtons(searchPlayer);
    
    } else {
        alert("Please enter a valid player name.");
    }
    console.log(event);
}


//API fetch to freeNBA API
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


//getPlayerimage
var getPlayerImage = function(playerName) {
    console.log("getPlayerImage function was called");

fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=" + playerName + "&count=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": "f5473a8174msh28e65885231f9c9p10dbb4jsnb8d34c7c50ba"
	}
})
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response.value[0].contentUrl);

  var playerImage = response.value[0].contentUrl

  // Create a variable that will select the <div> where the GIF will be displayed
  var responseContainerEl = document.querySelector('#card-front');

  // Empty out the <div> before we append a GIF to it
  responseContainerEl.innerHTML = '';

  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', playerImage);

  // Append 'gifImg' to the <div>
  responseContainerEl.appendChild(gifImg);
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
    var playerFullName = playerInfo.data[0].first_name + " " + playerInfo.data[0].last_name;
    playerNameEl.textContent = playerFullName;

    // Player's full team name
    console.log("Player's full team name: " + playerInfo.data[0].team.full_name);
    teamNameEl.textContent = playerInfo.data[0].team.full_name;

    // Player's position
    console.log("Player's position abbreviation: " + playerInfo.data[0].position);
    playerPositionEl.textContent = playerInfo.data[0].position;

    // Player's conference and division
    console.log("Player's conference and division: " + playerInfo.data[0].team.conference + " Conference, " + playerInfo.data[0].team.division + " Division");
    conferenceDivisionEl.textContent = playerInfo.data[0].team.conference + " / " + playerInfo.data[0].team.division;

  // Player's first name and last name
  console.log("Player's first and last name: " + playerInfo.data[0].first_name + " " + playerInfo.data[0].last_name);

  // Player's position
  console.log("Player's position abbreviation: " + playerInfo.data[0].position);

  // Player's full team name
  console.log("Player's full team name: " + playerInfo.data[0].team.full_name);

  // Player's conference and division
  console.log("Player's conference and division: " + playerInfo.data[0].team.conference + " Conference, " + playerInfo.data[0].team.division + " Division");

};

var createPlayerButtons = function() {
    var playerFullName = document.getElementById("full-name").textContent;
    if(playerFullName) {
        console.log(playerFullName);
        var playerButtonEl = document.createElement("button");
        playerButtonEl.className = "button";
        playerButtonEl.textContent = playerFullName;
        playerButtonEl.style.background = "grey";
        playerButtonEl.style.margin = "15px 0 15px 0";
        playerButtonEl.style.border = "2px solid white";
        playerButtonEl.style.color = "white";
        playerButtonEl.style.fontWeight = "bold";
        playerButtonEl.style.fontSize = "1.5rem";
    } else {
        alert("Please enter a valid player name, click search, and then optionally save.")
    }
    myTeamEl.appendChild(playerButtonEl);
}

// var randomNumber = function() {
//     value = Math.floor(Math.random();
//     console.log(value);
//     getPlayerInfo(value);
// }

//getPlayerImage();

searchButtonEl.addEventListener("click", formSubmitHandler); 

saveButtonEl.addEventListener("click", createPlayerButtons);

//randomButtonEl.addEventListener("click", chooseRandomPlayer);


// var searchedPlayerEl = document.getElementById("searchPlayer")

function saveButton() {
   if (localStorage.saveButton) {
     localStorage.saveButton = playerInfo(localStorage.saveButton)
   } 
 console.log(saveButton)
 }

// function searchButton() {
//   var searchTerm = searchedPlayerEl.value;
//   getPlayerInfo(searchTerm)
//   localStorage.setItem('search', JSON.stringify(getPlayerInfo));
//   console.log(searchButton)
// }

var searchedPlayerEl = document.getElementById("searchPlayer")

function saveButton() {
  if (localStorage.saveButton) {
    localStorage.saveButton = playerInfo(localStorage.saveButton)
  }
console.log(saveButton)
}

function searchButton() {
  var searchTerm = searchedPlayerEl.value;
  getPlayerInfo(searchTerm)
  localStorage.setItem('search', JSON.stringify(getPlayerInfo));
  console.log(searchButton)
}

