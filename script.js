//Função da escolha do computador de forma aleatória

function computerChoice() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * option.length);
    return option[choice];
}

// Função da escolha humana

function getHumanChoice() {

    let myChoice = prompt("choose one of the options: rock, paper or scissors").toLowerCase();
    return myChoice;
}


//Função da rodada do jogo

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);


    if (humanChoice === computerChoice) {
        return "Tie";

    } else if (humanChoice === "rock" && computerChoice === "scissors") {

        return "You win! Rock beats scissors."

    } else if (humanChoice === "paper" && computerChoice === "rock") {

        return "You win! Paper wraps the rock."

    } else if (humanChoice === "scissors" && computerChoice === "paper") {

        return "You win! Scissors beats paper.";

    } else if (computerChoice === "rock" && humanChoice === "scissors") {

        return "You lost! Rock beats scissors.";

    } else if (computerChoice === "paper" && humanChoice === "rock") {

        return "You lost! Paper wraps the rock.";

    } else if (computerChoice === "scissors" && humanChoice === "paper") {

        return "You lost! Scissors beats paper.";
    }
}


function playGame() {

    // Variáveis referente a pontuação

    let humanScore = 0;
    let computerScore = 0;
    let round = 1

    //Loop para 5 rodadas do jogo

    for (round = 1; round <= 5; round++) {
        console.log("\nRound " + round + ":");
        let human = getHumanChoice(); // obtém a escolha humana através da entrada  no navegador
        let computer = computerChoice(); // obtém as escolha aletária do computador
        let result = playRound(human, computer); //passa como parâmetros humam e computer para a funcão playRound
        console.log(result); // retorna o resultado da função playRound

        // Verifica o resultado e atualiza o placar
        //.includes() serve para verificar se possui a palavra em questão, caso positivo incrementa a variável

        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lost")){
            computerScore++;
        }

    }

     // Mostra o placar parcial
    console.log("Score so far - You: " + humanScore + " | Computer: " + computerScore);
    // Mostra o resultado final
     console.log("Final score - You: " + humanScore + " | Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Too bad! The computer won the game.");
    } else {
        console.log("The game ended in a tie!");
    }

}

playGame();




