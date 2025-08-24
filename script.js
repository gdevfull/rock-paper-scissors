//Função da escolha do computador de forma aleatória

function computerChoice() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * option.length);
    return option[choice];
}

// Função da escolha humana

function getHumanChoice() {

    let myChoice = prompt("choose one of the options: rock, paper or scissors").toLowerCase().trim();
    return myChoice;
}

// Variáveis referente a pontuação

let humanScore = 0;
let computerScore = 0;

//Função da rodada do jogo

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);


    if (humanChoice === computerChoice) {
        return "empate";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "you won this round";
    } else {
        
        computerScore++;
        return "the computer won this round";
    }
}
 
let human = getHumanChoice(); // obtém a escolha humana através da entrada  no navegador
let computer = computerChoice(); // obtém as escolha aletária do computador
let result = playRound(human, computer); //passa como parâmetros humam e computer para a funcão playRound
console.log(result); // retorna o resultado da função playRound




