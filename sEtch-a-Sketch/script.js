// Get the grid container element
const gridContainer = document.querySelector('.grid-container');

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

const gridItemS = document.querySelectorAll('.grid-item');
gridItemS.forEach((gridItem) => {
  
    // and for each one we add a 'click' listener
    gridItem.addEventListener('mouseover', () => {
        console.log("teste ok");
        gridItem.classList.add('grid-item-hover');
    })
});

// const gridSquareHoverS = document.getElementsByClassName('grid-item');
// for (let i = 0; i < gridSquareHoverS.length; i += 2) {
//     console.log(gridSquareHoverS[i]);
//     gridSquareHoverS[i].classList.add('grid-item-even')
// }
// console.log(typeof gridSquareHoverS);
// gridSquareHoverS.array.forEach(gridSquareHover => {
//         gridSquareHover.addEventListner('hover', alerta);
        
//     });