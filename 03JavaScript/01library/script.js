var myLibrary = [];

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
  cleanTable();
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  tbl.setAttribute ("id", "myTable");
  const tblBody = document.createElement("tbody");

  // creating all cells
  var i = 0;
  myLibrary.forEach(book => {

    // creates a table row
    const row = document.createElement("tr");

    for (var j = 0; j < book.length + 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      var cellText;
      if (j == book.length) {
        cellText = document.createElement('button');
        cellText.innerText = 'del';
        cellText.id = [i, j];
        cellText.addEventListener('click', () => {
          deleteRow(cellText.id);
        });
        // document.querySelector('.btn-cell').appendChild(newBtn);
      } else {
        cellText = document.createTextNode(myLibrary[i][j]);
      }
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

// function deleteRow (rowColumn) {
//   console.log(rowColumn);
//   document.getElementById("myTable").deleteRow(0);
// }

function deleteRow (rowColumn) {
  let [a,,b] = Array.from(rowColumn);
  let myLibraryRowDeleted = [];

  for (let k = 0; k < myLibrary.length; k++) {
    if (k != a) {
      myLibraryRowDeleted.push(myLibrary[k]);
    }
  }

  myLibrary = myLibraryRowDeleted;
  console.log(myLibrary, typeof myLibrary);
  console.log(myLibraryRowDeleted, typeof myLibraryRowDeleted);
  generateTable();
}


function cleanTable() {
  const containerOfTable = document.getElementById('container-list-books');
  const tableToDelete = document.getElementById("myTable");
  if (tableToDelete != null) {
    containerOfTable.removeChild(tableToDelete);
  }
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