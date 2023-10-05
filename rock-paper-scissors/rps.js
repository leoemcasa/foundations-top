function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor"; 
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                addToDiv(`You LOSE! ${computerSelection} beats ${playerSelection}`);
                return "LOSE"
            } else if (computerSelection == "scissor") {
                addToDiv(`You WIN! ${playerSelection} beats ${computerSelection}`);
                return "WIN"
            } else { addToDiv(`${playerSelection} DRAW`); return "DRAW" }
            break
        case "paper":
            if (computerSelection == "scissor") {
                addToDiv(`You LOSE! ${computerSelection} beats ${playerSelection}`);
                return "LOSE"
            } else if (computerSelection == "rock") {
                addToDiv(`You WIN! ${playerSelection} beats ${computerSelection}`);
                return "WIN"
            } else { addToDiv(`${playerSelection} DRAW`); return "DRAW" }
            break
        case "scissor":
            if (computerSelection == "rock") {
                addToDiv(`You LOSE! ${computerSelection} beats ${playerSelection}`);
                return "LOSE"
            } else if (computerSelection == "paper") {
                addToDiv(`You WIN! ${playerSelection} beats ${computerSelection}`);
                return "WIN"
            } else { addToDiv(`${playerSelection} DRAW`); return "DRAW" }
            break
        default: { addToDiv("You LOSE because you are STUPID!"); return "STUPID" }
    }
}

const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
  
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        const allresultsByClass = document.getElementsByClassName("play-result");
        let result = "document.getElementsByClassName('play-result')";
        let [you, machine, draw] = [0, 0, 0];
        for (let i = 0; i < allresultsByClass.length; i++) {
            result += `\n  ${allresultsByClass[i].textContent}`;
            console.log(`Resultado ${i}!!!`);
            console.log(allresultsByClass[i].textContent.substring(4,8));
            if ( allresultsByClass[i].textContent.substring(4,8) == "WIN!" ) {
                 you += 1;
            } else if (allresultsByClass[i].textContent.substring(4,8) == "LOSE" ) {
                machine =+ 1;
            } else { draw += 1; }
            console.log(`you ${you}. machine ${machine} and ${draw} draws`);
            console.log(`------------------`);
            try {
                if ( you == 5 || machine == 5) {
                    console.log(`Resultado final: ${you}, ${machine} e ${draw} draws`);
                    [you, machine, draw] = [0, 0, 0];
                    return alert("fim de jogo");
                    throw "exit";
                }
            } catch (e) {

            };
        }
        
        //  const parentDOM = document.getElementById("container");
        //   const test = parentDOM.getElementsByClassName("play-result"); // a list of matching elements, *not* the element itself
        // console.log(test);
        // console.log(document.getElementById("container"));
    });
             //     if (round == "WIN") {
        //         you += 1;
        //     } else if (round == "LOSE") {
        //         machine += 1;
        //     } else { draw += 1; }
        // }
        // if (you > machine) {
        //     console.log(`WINNER! you ${you}, computer ${machine} and ${draw} draws.`);
        // } else if (you < machine) {
        //     console.log(`You Lost! you ${you}, computer ${machine} and ${draw} draws.`);
        // } else { console.log(`DRAW! you ${you}, computer ${machine} and ${draw} draws.`); }

  });


function addToDiv(content) {
    var resultDiv = document.getElementById("container");
    var newParagraph = document.createElement("p");
    newParagraph.classList.add('play-result');
    newParagraph.textContent = content;
    resultDiv.appendChild(newParagraph);
}

