var myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  myLibrary[myLibrary.length] = new Book(title, author, pages, read);
}

class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info = () => [title, author, pages, read];

  // get name() {
  //   return this._name;
  // }

  // set name(value) {
  //   if (value.length < 4) {
  //     alert("Name is too short.");
  //     return;
  //   }
  //   this._name = value;
  // }

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
  let i = 0;
  myLibrary.forEach(book => {
    // creates a table row
    const row = document.createElement("tr");
    
    let objKeys = Object.keys(myLibrary[i]);
    for (var j = 0; j < objKeys.length; j++) { // 1 do botao delete
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      var cellText;
      if (j == objKeys.length - 1) {
        cellText = document.createElement('button');
        cellText.innerText = 'del';
        cellText.id = [i, j];
        cellText.addEventListener('click', () => {
          deleteRow(cellText.id);
        });
        // document.querySelector('.btn-cell').appendChild(newBtn);
      } else {
        cellText = document.createTextNode(Object.values( myLibrary[ i ] )[ j + 1 ]);
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

function deleteRow (rowColumn) {
  let [a,,b] = Array.from(rowColumn);
  let myLibraryRowDeleted = [];

  for (let k = 0; k < myLibrary.length; k++) {
    if (k != a) {
      myLibraryRowDeleted.push(myLibrary[k]);
    }
  }

  myLibrary = myLibraryRowDeleted;
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

generateTable();