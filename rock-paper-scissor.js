//Start call DOM
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');

const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
//End call DOM


// Creating game system :comparing computer and user
 
//creating win function 
function win(userChoice,getComputerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.style.background = "blue";
    result_div.innerHTML= `${convertLetter(userChoice)}   beat  ${convertLetter(getComputerChoice)}  .You win!.`;
    document.getElementById(userChoice).classList.add('winColor');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('winColor');},500);
    
}


//creating lose function
function lose(userChoice,getComputerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.style.background = "red";
    result_div.innerHTML= `${convertLetter(getComputerChoice)}    beat   ${convertLetter(userChoice)}  .You Lose !!.`;
    document.getElementById(userChoice).classList.add('loseColor');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('loseColor');},500)
}

//creating draw function
function draw(userChoice,getComputerChoice){

    result_div.style.background = "green";
    result_div.innerHTML= `Noone win , It's draw`;
    document.getElementById(userChoice).classList.add('drawColor');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('drawColor');},500)
}
//End of creatin game system

//creating function for user choice
function game(userChoice){
     let getComputerChoice = computerChoice();
     switch(userChoice+getComputerChoice){
         case "rs":
         case "pr":
         case "sp":
        win(userChoice,getComputerChoice);
        break;
        case "sr":
         case "rp":
         case "ps":
        lose(userChoice,getComputerChoice);
        break;
        case "rr":
         case "pp":
         case "ss":
        draw(userChoice,getComputerChoice);
        break;
     }
}
//Creating function for user click
function main(){
    rock_div.addEventListener('click',function(){
    game('r');
    })
    paper_div.addEventListener('click',function(){
    game('p') ;
    })
    scissor_div.addEventListener('click',function(){
    game('s');
    })
}main();



//Creating a function for computer choice
function computerChoice() {
    const choices = ['r','p','s'];
    const randomChoices = Math.floor(Math.random()*3);
    return choices[randomChoices];
}

//Converting letter to readable
function convertLetter(letter){
    if(letter==='r')return 'ROCK ';
    if(letter==='p')return 'PAPER';
    return 'SCISSOR';
}



