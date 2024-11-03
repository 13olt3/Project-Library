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
myLibrary.forEach(libraryIntoList);
function libraryIntoList(book){
    bookInfo += `${book.Title}, ${book.Author}, ${book.Pages} pages, ${book.Read}. \n`;
}

const hobbit = new Book('The Hobbit', 'Tolkien', '250', 'yes');
const theRing = new Book('The Ring', 'R.R Stein', '500', 'no');
