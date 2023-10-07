// Get the grid container element
const gridContainer = document.querySelector('.grid-container');
let howManySquareSquares

// Create a 16x16 grid
function createGrid() {
    if (howManySquareSquares == undefined) {
        howManySquareSquares = 16;
    }
    for (let i = 0; i < howManySquareSquares ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
    }
    gridContainer.style.padding = '40px';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${howManySquareSquares}, 8px)`;
    gridContainer.style.gridTemplateRows = `repeat(${howManySquareSquares}, 8px)`;
    addMouseOverListner();
}
createGrid();

function addMouseOverListner() {
    const gridSquareS = document.querySelectorAll('.grid-square');
    gridSquareS.forEach((gridSquare) => {
        // and for each one we add a 'click' listener
        gridSquare.addEventListener('mouseover', () => {
            console.log("teste ok");
            gridSquare.classList.add('grid-square-hover');
        })
    });
}

function removeGrid() {
    const Squares = document.querySelectorAll('.grid-square');
    Squares.forEach(square => {
        square.remove();
    });
}

const button = document.getElementById('btn-squares');
button.addEventListener('click', () => {
    howManySquareSquares = prompt();
    let min = 8;
    let max = 88;
    console.log(typeof howManySquareSquares,howManySquareSquares, typeof min, min, typeof max, max);
    if (howManySquareSquares >= min && howManySquareSquares <= max) {
        removeGrid();
        createGrid();
    } else { 
        return alert(`o valor precisa estar entre 8 e 88!`); 
    }

});