var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function main(){
    rock_div.addEventListener('click', function(){
        game("r");

    })

    paper_div.addEventListener('click', function(){
        game("p");
    
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
        
        })

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNum= Math.floor(Math.random() * choices.length)
    return choices [randomNum];
}
function win(userChoice,computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You win!";
}
function lose(userChoice,computerChoice){

    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML="Computer win!"
}
function draw(){
 result_div.innerHTML="Draw";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "pr":
        case "rp":
        case "ps":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;    
    }
}


    
        
}    
main();