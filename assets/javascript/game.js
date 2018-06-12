//////Variables ///////

// var targetNumber = Math.floor(Math.random()* 111 + 19 - 9);
var totalScore = 0
var Wins = 0;
var Losses = 0;
var randomNumber = [];

// Logic for generating random number to reach between 19-120 to reach and displaying number on page for player to see//
var targetNumber = Math.floor(Math.random()* 110 + 19 - 9);
console.log(targetNumber);
$("#random-number").append(targetNumber);

// Logic for generating random number between 1-12 to for randomNumber Array
var t= 4
for(var i = 0; i < t; i++) {
    randomNumber.push(Math.floor(Math.random()* 11 + 1))
}
console.log(randomNumber);

//Create on-click event for each diamond; on-click each Diamond will pull a number from the randomNumber Array //

$("#one").on("click",function() {
    var Dione = randomNumber[0];
    totalScore = totalScore + randomNumber[0];
    console.log(Dione);
    console.log(totalScore)
})  
$("#two").on("click",function() {
    var Ditwo = randomNumber[1]
    totalScore = totalScore + randomNumber[1];
    console.log(Ditwo);
    console.log(totalScore)
})
$("#three").on("click",function() {
    var Dithree = randomNumber[2]
    totalScore = totalScore + randomNumber[2]
    console.log(Dithree);
    console.log(totalScore)
})
$("#four").on("click",function() {
    var Difour = randomNumber[3]
    totalScore = totalScore + randomNumber[3]
    console.log(Difour);
    console.log(totalScore)
})

//On click event will populate output to the total score///

//If score is = to target score; player wins, Win column updated, game resets and new target number is generated///

//If score is > than target score; player losses, Loss column updated, game resets and new target number is generated///




//////Functions ///////

// function randomNumber() {

// };

function scores() {

function updateWins() {
    if (totalScore===targetNumber) {
    document.querySelector("#Wins").innerHTML = "Wins:" + Wins++;
    }
};

function updateLosses() {
    if (totalScore>targetNumber) {
        document.querySelector("#Losses").innerHTML = "Losses:" + Losses++;
        }
}}