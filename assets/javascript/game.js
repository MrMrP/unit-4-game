//////Variables ///////
// var targetNumber = Math.floor(Math.random()* 111 + 19 - 9);
$ (document) .ready (function () {
    
    var totalScore = 0
    var Wins = 0;
    var Losses = 0;
    var randomNumber = [];
    var targetNumber = Math.floor(Math.random()* 110 + 19 - 9);
    console.log(targetNumber);
    $("#random-number").append(targetNumber);

    game(totalScore,Wins,Losses,randomNumber);
    end(totalScore,targetNumber);
    

    
})

function game (totalScore, Wins, Losses,randomNumber) {

// Logic for generating random number to reach between 19-120 to reach and displaying number on page for player to see//


// Logic for generating random number between 1-12 to for randomNumber Array
var t= 4
for(var i = 0; i < t; i++) {
    randomNumber.push(Math.floor(Math.random()* 11 + 1))
}
console.log(randomNumber);

//Create on-click event for each diamond; on-click each Diamond will pull a number from the randomNumber Array and add total score //
        
$("#one").on("click",function() {
    var Dione = randomNumber[0];
    totalScore = totalScore + randomNumber[0];
    $("#score").text(totalScore);
 
    
    console.log(Dione);
    console.log(totalScore)
})  
$("#two").on("click",function() {
    var Ditwo = randomNumber[1];
    totalScore = totalScore + randomNumber[1];
    $("#score").text(totalScore); {
        if (totalScore ===  targetNumber) {
        Wins++;
        alert("You Win!")
        document.querySelector(".wins").text = "wins: " + Wins++;
        }
        else if (totalScore > targetNumber) {
        Losses++;
        alert("You Lose!")
        document.querySelector(".losses").text = "losses: " + Losses++;   
    }}
    console.log(Ditwo);
    console.log(totalScore)
})
$("#three").on("click",function() {
    var Dithree = randomNumber[2];
    totalScore = totalScore + randomNumber[2];
    $("#score").text(totalScore);
        if (totalScore ===  targetNumber) {
        Wins++;
        alert("You Win!")
        document.querySelector(".wins").text = "wins: " + Wins++;
        }
        else if (totalScore > targetNumber) {
        Losses++;
        alert("You Lose!")
        document.querySelector(".losses").text = "losses: " + Losses++;   
    }
    console.log(Dithree);
    console.log(totalScore)
})
$("#four").on("click",function() {
    var Difour = randomNumber[3];
    totalScore = totalScore + randomNumber[3];
    $("#score").text(totalScore);
        if (totalScore ===  targetNumber) {
        Wins++;
        alert("You Win!")
        document.querySelector(".wins").text = "wins: " + Wins++;
        }
        else if (totalScore > targetNumber) {
        Losses++;
        alert("You Lose!")
        document.querySelector(".losses").text = "losses: " + Losses++;   
    }
    console.log(Difour);
    console.log(totalScore);
})
}

// Logic for comparing totalScore (after buttonclick value added) to targetNumber. If totalScore=targetNumber player wins, Wins updated by 1 and game resets. If totalScore !== targetNumber player losses, losses updated by 1 and game resets. //
// }function end(totalScore,targetNumber)
// { if (totalScore ===  targetNumber) {
//     Wins++;
//     alert("You Win!")
//     document.querySelector(".wins").text = "wins: " + Wins++;
//     }
//     else if (totalScore > targetNumber) {
//     Losses++;
//     alert("You Lose!")
//     document.querySelector(".losses").text = "losses: " + Losses++;   
//