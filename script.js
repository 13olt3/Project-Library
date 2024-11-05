const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(readStatus == "yes"){
        this.read = "has been read";
    }
    else{
        this.read = "not read yet";
    }

    this.readStatus = readStatus;
    this.bookInfo = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary(BookObj){
    let bookData = {
        Title: BookObj.title,
        Author: BookObj.author,
        Pages: BookObj.pages,
        Read: BookObj.read

    }
    myLibrary.push(bookData);
    return;
}

let bookInfo = "";

function libraryIntoList(book){
    bookInfo += `${book.Title}, ${book.Author}, ${book.Pages} pages, ${book.Read}. \n`;
}

const hobbit = new Book('The Hobbit', 'Tolkien', '250', 'yes');
const theRing = new Book('The Ring', 'R.R Stein', '500', 'no');
// addBookToLibrary(hobbit);
// addBookToLibrary(theRing);
// myLibrary.forEach(libraryIntoList);

const addBook = document.querySelector(".addBookBtn");
const mainDisplay = document.querySelector(".mainContent");


const bookDataForm = document.createElement("div");
bookDataForm.classList.add("bookInputForm");



const bookForm = document.querySelector(".addBookForm");
const bookFormStyle = window.getComputedStyle(bookForm);
addBook.addEventListener("click", function(e){
    if (bookFormStyle.getPropertyValue('visibility') == "visible"){
        bookForm.style.visibility = "hidden";
    }
    else if (bookFormStyle.getPropertyValue('visibility') == "hidden"){
        bookForm.style.visibility = "visible";
    }
});


const inputBookTitle = document.querySelector("#bookTitle");
const inputBookAuthor = document.querySelector("#bookAuthor");
const inputBookPages = document.querySelector("#pages");

let newBookInput = "";

const createBook = document.querySelector(".createBookBtn");
createBook.addEventListener("click",function(e){
    let newBookData = new Book(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value, "no");
    addBookToLibrary(newBookData);
});


