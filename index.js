var choices = document.querySelectorAll(".choice").addEventListener("click", () {
    if(innerHTML=="ROCK")
    {
    return playerChoice == "ROCK";
    }
    else if(innerHTML=="PAPER"){
        return playerChoice =="PAPER";
    }
    else{
        return playerChoice =="SCISSORS";
    }

});



function getComputerChoice(){
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
    return ("It is tie");
        
    }
    else if(playerChoice == "ROCK" && computerChoice == "PAPER" ||
            playerChoice == "PAPER" && computerChoice == "ROCK" ||
            playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            return ("You won");
            }

    else{
        return ("You lost");
    }
    
}

function game(playerChoice, computerChoice){
    var result = checkWinner(playerChoice, computerChoice);
    if (result == "It is tie"){
        return("TIE");
    }
    else if(result == "You won"){
        return ("WIN");
    }
    else{
        return("LOST");
    }


}
var playerChoice = playerChoice;
var computerChoice = getComputerChoice();
console.log(game(playerChoice, computerChoice));






