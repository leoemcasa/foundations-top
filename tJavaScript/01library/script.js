const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => [title, author, pages, read]
  }

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push([title, author, pages, read]);
}

addBookToLibrary('O Estrangeiro', 'Camus', 90, 0);
addBookToLibrary('Autobiografia', 'Chesterton', 90, 1);

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  let i = 0;
  myLibrary.forEach(book => {

    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < book.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(myLibrary[i][j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
    i += 1;
    });

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  var appendTable = document.querySelector('#container-list-books');
  appendTable.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

function cleanTable() {
  const child = document.querySelector('#container-list-books');
  console.log(child);
  child.removeChild(child.firstElementChild);
}

const form = document.getElementById('form-book-id')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const bookName = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  const bookRead = document.getElementById('read').value;
  addBookToLibrary(bookName, bookAuthor, bookPages, bookRead);
  cleanTable()
  generateTable()
})

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   addBookToLibrary('Auto', 'Chest', 99, 1);
// })

generateTable();