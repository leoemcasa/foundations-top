
const gridContainer = document.getElementById('main-content');

function createGrid() {
    for (let i = 0; i < 9; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('item');
        gridSquare.classList.add(`item${ i + 1 }`);
        gridSquare.addEventListener('click', (e) => {
            console.log(e.target);
        })
        gridContainer.appendChild(gridSquare);
    }

}
createGrid();