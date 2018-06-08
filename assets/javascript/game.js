// Logic for generating random number between 19-120 to reach//
var targetNumber = Math.floor(Math.random()* 111 + 19 - 9);
console.log(targetNumber);
$("#random-number").append(targetNumber);

//Create on-click event for each diamond //

//On click event will generate random value between 1-12///

    // var Dione = Math.floor(Math.random()* 11 + 1) ;
    // var Ditwo = Math.floor(Math.random()* 11 + 1) ;
    // var Dithree = Math.floor(Math.random()* 11 + 1) ;
    // var Difour = Math.floor(Math.random()* 11 + 1) ;
    // console.log(one,two,three,four);

    var diamondScores = {
        DiOne : Math.floor(Math.random()* 11 + 1),
        DiTwo : Math.floor(Math.random()* 11 + 1),
        DiThree : Math.floor(Math.random()* 11 + 1),
        DiFour : Math.floor(Math.random()* 11 + 1)   
    }
    console.log(diamondScores)

//On click event will populate output to the total score///

//If score is = to target score; player wins, Win column updated, game resets and new target number is generated///

//If score is > than target score; player losses, Loss column updated, game resets and new target number is generated///



//////Variables ///////

// var targetNumber = Math.floor(Math.random()* 111 + 19 - 9);
var Dione = Math.floor(Math.random()* 11 + 1) ;
var Ditwo = Math.floor(Math.random()* 11 + 1) ;
var Dithree = Math.floor(Math.random()* 11 + 1) ;
var Difour = Math.floor(Math.random()* 11 + 1) ;
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