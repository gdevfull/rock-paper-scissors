
function computerChoice() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * option.length);
    return option[choice];
}

let escolha = computerChoice();
console.log('Choice of computer: ' + escolha);

function getHumanChoice(){
   
    let choiceHuman = prompt("choose one of the options: rock, paper or scissors");
    return choiceHuman;
}

let myChoice = getHumanChoice();
console.log('You chose: ' + myChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    if (humanChoice === )
}