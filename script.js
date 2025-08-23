
function computerChoice() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * option.length);
    return option[choice];
}

let escolha = computerChoice();
console.log('Choice of computer: ' + escolha);


