//calling the DOM
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span =  document.getElementById('computer-score');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

//END of calling DOM

//user click function
function main(){
    rock_div.addEventListener('click',function(){
        game('r');
    });
    paper_div.addEventListener('click',function(){
        game('p');
    });
    scissor_div.addEventListener('click',function(){
        game('s');
    });
}main();

//computer function
function getComputerChoice(){
    let choices = ['r','p','s'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

//Game function
function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
        win(userChoice,computerChoice); break;
        
        case 'sr':
        case 'rp':
        case 'ps':
        lose(userChoice,computerChoice);break;
        
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice,computerChoice);break;    
    }
}

//creating win function]
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.style.background = "blue";
    let changeColor = document.getElementById(userChoice);
    changeColor.classList.add('winColor');
    setTimeout(function(){changeColor.classList.remove('winColor')},300);
    result_div.innerHTML = `${convertWord(userChoice)} beat ${convertWord(computerChoice)}. YOU WIN !!`   ;
}
//creatin lose function
let lose =(userChoice,computerChoice)=>{
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.style.background = "red";
    let changeColor = document.getElementById(userChoice);
    changeColor.classList.add('loseColor');
    setTimeout(function(){changeColor.classList.remove('loseColor')},300);
    result_div.innerHTML = `${convertWord(computerChoice)} beats ${convertWord(userChoice)}. YOU LOSE` ;
}

//creating draw function
function draw(userChoice,computerChoice){
    result_div.style.background = "green";
    let changeColor = document.getElementById(userChoice);
    changeColor.classList.add('drawColor');
    setTimeout(function(){changeColor.classList.remove('drawColor')},300);
    result_div.innerHTML = " This is a draw, no one win"   ;
}

//creating convert word function
let convertWord = letter =>{
    if(letter === 'r') return "ROCK";
    if(letter === 'p') return "PAPER";
    return "SCISSOR";
}