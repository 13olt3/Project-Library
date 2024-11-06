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
addBookToLibrary(hobbit);
addBookToLibrary(theRing);
// myLibrary.forEach(libraryIntoList);


// const bookDataForm = document.createElement("div");
// bookDataForm.classList.add("bookInputForm");
const addBook = document.querySelector(".addNewBookBtn");
const mainDisplay = document.querySelector(".mainContent");
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

const createBook = document.querySelector(".addBookBtn");
const readStatusYes = document.querySelector("#readStatusYes");
const readStatusNo = document.querySelector("#readStatusNo");

createBook.addEventListener("click",function(e){
    let readStatusYesNo = "";
    if ( readStatusYes.checked){
        readStatusYesNo = "yes";
    }
    else if (readStatusNo.checked){
        readStatusYesNo = "no";
    }
    let newBookData = new Book(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value, readStatusYesNo);
    addBookToLibrary(newBookData);
    if (sideBar.childElementCount <= 5) {
        addBookToSidebar();
    }
});

// SIDEBAR SCRIPTS

const sideBar = document.querySelector(".sideBar");

function fillSideBar(){
    for(let i = 0; i < Math.min(myLibrary.length, 5); ++i){
        const sideBarBook = document.createElement("button");
        let bookName = myLibrary[i].Title;
        bookName = bookName.replace(/\s+/g, '');
        sideBarBook.classList.add("sideBarBook");
        sideBarBook.classList.add(bookName);
        sideBarBook.textContent = myLibrary[i].Title;
        sideBar.appendChild(sideBarBook);
    }
};
function addBookToSidebar(){
    let bookNumber = myLibrary.length -1;    
    let bookName = myLibrary[bookNumber].Title;
    bookName = bookName.replace(/\s+/g, '');
    const sideBarBook = document.createElement("button");
    sideBarBook.classList.add("sideBarBook");
    sideBarBook.classList.add(bookName);
    sideBarBook.textContent = myLibrary[bookNumber].Title;
    sideBar.appendChild(sideBarBook);

}

fillSideBar();






