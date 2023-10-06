// Get the grid container element
const gridContainer = document.querySelector('.grid-container');

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}
