class Book {

    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    get book() {
        return [this.title, this.author, this.pages, this.read];
    }

}

var myLibrary = [];

// function addBookToLibrary() {
//     myLibrary.push([title, author, pages, read]);
// }

function addBookToLibrary() {
    myLibrary[myLibrary.length] = new Book('O Estrangeiro', 'Camus', 90, 0);
}

addBookToLibrary();
// addBookToLibrary('Autobiografia', 'Chesterton', 90, 1);


for (let i = 0; i < 6; i++ ) { 
    console.log(myLibrary[i]);
}







