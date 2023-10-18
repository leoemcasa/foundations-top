function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor"; 
  }

function playRound(playerSelection, computerSelection) {
    // your code here!
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                return alert(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else if (computerSelection == "scissor") {
                return alert(`You WIN! ${playerSelection} beats ${computerSelection}`);
            } else { return alert("DRAW"); }
        case "paper":
            if (computerSelection == "scissor") {
                return alert(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else if (computerSelection == "rock") {
                return alert(`You WIN! ${playerSelection} beats ${computerSelection}`);
            } else { return alert("DRAW"); }
        case "scissor":
            if (computerSelection == "rock") {
                return alert(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else if (computerSelection == "paper") {
                return alert(`You WIN! ${playerSelection} beats ${computerSelection}`);
            } else { return alert("DRAW"); }
        default: { return alert("You LOSE because you are STUPID!"); }
    }
  }

  const btnRock = document.querySelector('#rock');
  btnRock.addEventListener('click', function() {
    playRound("rock", getComputerChoice());
  });

  const btnPaper = document.querySelector('#paper');
  btnPaper.addEventListener('click', function() {
    playRound("paper", getComputerChoice());
  });

  const btnScissor = document.querySelector('#scissor');
  btnScissor.addEventListener('click', function() {
    playRound("scissor", getComputerChoice());
  });

 // playRound(playerSelection, computerSelection);