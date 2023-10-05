function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor"; 
  }

function playRound(playerSelection, computerSelection) {
    // your code here!
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                return `You LOSE! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection == "scissor") {
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            } else { return "DRAW"; }
        case "paper":
            if (computerSelection == "scissor") {
                return `You LOSE! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection == "rock") {
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            } else { return "DRAW"; }
        case "scissor":
            if (computerSelection == "rock") {
                return `You LOSE! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection == "paper") {
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            } else { return "DRAW"; }
        default: { return "You LOSE because you are STUPID!"; }
    }
  }

function game () {
    let [you, machine, draw] = [0 , 0, 0];
    for (let i=0; i < 5; i++) {
        const playerSelection = prompt().toLowerCase();
        const computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if (round[4] == "W") {
            you += 1;
        } else if (round[4] == "L") {
            machine += 1;
        } else { draw += 1; }
        console.log(round);
    }
    if (you > machine) {
        console.log(`WINNER! you ${you}, computer ${machine} and ${draw} draws.`);
    } else if (you < machine) {
        console.log(`You Lost! you ${you}, computer ${machine} and ${draw} draws.`);
    } else { console.log(`DRAW! you ${you}, computer ${machine} and ${draw} draws.`); }
}
  
 game();
 // playRound(playerSelection, computerSelection);