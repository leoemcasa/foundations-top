
const gridContainer = document.getElementById('main-content');

function createGrid() {
    for (let i = 0; i < 9; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('item');
        gridSquare.setAttribute('id', `item${ i + 1 }`)
        gridSquare.addEventListener('click', function myCallback () { 
            const gam = game();
            const playerClass = gam.getPlayer();
            this.classList.add(`item-class-${playerClass}`);
            const resul = gam.check(playerClass);
            console.log(`constResul ${resul}`);
            if (resul != undefined) {
                alert(`Fim, parabéns jogador: ${resul}`);
                setTimeout(empty, 2000, gridContainer);
            }
            this.removeEventListener('click', myCallback);
        })
        gridContainer.appendChild(gridSquare);
    }

}

function game() {
    return {
        getPlayer() {
            const check = document.querySelectorAll("[class^='item item-class-']");
            let player;
            check.length % 2 == 0 ? player = 'x' : player = 'o';
            return player;
        },
  
        check(player) {
            let arrWinner1 = [ 'item1', 'item2', 'item3' ];
            let arrWinner2 = [ 'item1', 'item5', 'item9' ];
            let arrWinner3 = [ 'item1', 'item4', 'item7' ];
            let arrWinner4 = [ 'item2', 'item5', 'item8' ];
            let arrWinner5 = [ 'item3', 'item5', 'item7' ];
            let arrWinner6 = [ 'item3', 'item6', 'item9' ];
            let arrWinner7 = [ 'item4', 'item5', 'item6' ];
            let arrWinner8 = [ 'item7', 'item8', 'item9' ];
            
            let checkSubset = (parentArray, subsetArray) => {
                return subsetArray.every((el) => {
                    return parentArray.includes(el)
                })
            }

            let result = [];
            const checkItens = document.querySelectorAll(`[class^='item item-class-${player}']`);
            for ( let i = 0; i < checkItens.length; i++ ) {
                result.push(checkItens[i].id);
                
            }
            if (checkSubset(result, arrWinner1) ||
                checkSubset(result, arrWinner2) ||
                checkSubset(result, arrWinner3) ||
                checkSubset(result, arrWinner4) ||
                checkSubset(result, arrWinner5) ||
                checkSubset(result, arrWinner6) ||
                checkSubset(result, arrWinner7) ||
                checkSubset(result, arrWinner8)) {
                    return player
            }
        }
    }
}

function empty(element) {
    element.innerHTML = ""; 
}

createGrid();