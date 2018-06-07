// Logic for generating random number between 19-120 to reach//

//Create on-click event for each diamond //

//On click event will generate random value between 1-12///

//On click event will populate output to the total score///

//If score is = to target score; player wins, Win column updated, game resets and new target number is generated///

//If score is > than target score; player losses, Loss column updated, game resets and new target number is generated///



//////Variables ///////

var targetNumber = randomNumber()
var totalScore = []
var Wins = 0;
var Losses = 0;

//////Functions ///////

function randomNumber() {

};

function scores() {
    
};

function updateWins() {
    if (totalScore===targetNumber) {
    document.querySelector("#Wins").innerHTML = "Wins:" + Wins++;
    }
}

function updateLosses() {
    if (totalScore>targetNumber) {
        document.querySelector("#Losses").innerHTML = "Losses:" + Losses++;
        }
}