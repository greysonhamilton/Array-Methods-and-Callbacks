const fifaData = require('./fifa.js');

//console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// (a) Home Team name for 2014 world cup final


let finals2014 = fifaData.filter((year) => {

        return year.Year === 2014 && year.Stage === "Final";

    });
    
    // console.log(finals2014);

function homeTeam(arr) {

    return arr[0]["Home Team Name"];

}   console.log(homeTeam(finals2014));


// (b) Away Team name for 2014 world cup final

function awayTeam(arr) {

    return arr[0]["Away Team Name"];
    
}   console.log(awayTeam(finals2014));

// (c) Home Team goals for 2014 world cup final

function homeGoals(arr) {

    return arr[0]["Home Team Goals"];

}   console.log(homeGoals(finals2014));

// (d) Away Team goals for 2014 world cup final

function awayGoals(arr) {
    
    return arr[0]["Away Team Goals"]

}   console.log(awayGoals(finals2014));

// (e) Winner of 2014 world cup final

function winner(arr) {

    if (homeGoals(arr) > awayGoals(arr)) {

    return `${arr[0]["Home Team Name"]} is the winner!!`

}   else {

    return `${arr[0]["Away Team Name"]} is the winner!!`

}
    
    
}   console.log(winner(finals2014));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let finalStage = data.filter((getFinals) => {

        return getFinals.Stage === "Final";

    })

    return finalStage;

}   // console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb1) {

    let info = cb1(fifaData);

    const years = info.map((year) => {

        return {'Year': year.Year};
    })

    return years;

}   getYears(getFinals);

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// function getWinners(/* code here */) {

//     /* code here */

// };

// getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(/* code here */) {

// };

// getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(/* code here */) {

//     /* code here */

// };

// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// };

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */