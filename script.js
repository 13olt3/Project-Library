const myLibrary = [];
let selectedBookIndex = "";

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
const allMainContent = document.querySelectorAll(".mainContent > *");

function hideAllMainContent(){
    allMainContent.forEach((div)=>{

        div.style.visibility = "hidden";
    });
}



addBook.addEventListener("click", function(e){
    // if (bookFormStyle.getPropertyValue('visibility') == "visible"){
    //     bookForm.style.visibility = "hidden";
    // }
    // else if (bookFormStyle.getPropertyValue('visibility') == "hidden"){
    //     bookForm.style.visibility = "visible";
    // }
    hideAllMainContent();
    bookForm.style.visibility = "visible";
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
    sideBarBook.addEventListener("click", function(e){
        return returnBookIndex(e.target.textContent);
    });
    sideBarBook.addEventListener("click",function(e){
        let nameOfBook = e.target.textContent;
        selectedBookIndex = returnBookIndex(nameOfBook);
        updateMainData(returnBookIndex(nameOfBook));        
    });

    sideBar.appendChild(sideBarBook);

}

fillSideBar();


const targetBook = document.querySelectorAll(".sideBarBook");
const removeBook = document.createElement("button");
removeBook.classList.add("removeBookBtn");
removeBook.textContent = "Remove book";

const bookInformation = document.createElement("div");
bookInformation.classList.add("bookInfo");


removeBook.addEventListener('click', function(e){
    return deleteBookBtn(selectedBookIndex);
});

targetBook.forEach((book) =>{
    book.addEventListener("click",function(e){
        let nameOfBook = e.target.textContent;
        selectedBookIndex = returnBookIndex(nameOfBook);
        updateMainData(returnBookIndex(nameOfBook));        
    })
});
const showBookData = document.querySelector(".bookData");

function returnBookIndex(bookName){
    let bookIndex = "";
    for (let i = 0; i < myLibrary.length; ++i){
        if (bookName == myLibrary[i].Title){
            bookIndex = i;
        }
    }
    return bookIndex;    
    // console.log(myLibrary[bookIndex]);
}



function updateMainData(bookIndex){
    hideAllMainContent();
    showBookData.style.visibility = "visible";

    bookInformation.style.whiteSpace = "pre";
    bookInformation.textContent = `Title: ${myLibrary[bookIndex].Title} \r\nAuthor: ${myLibrary[bookIndex].Author};`
    showBookData.appendChild(removeBook);
    showBookData.appendChild(bookInformation);
}



function deleteBookBtn(bookIndex){
    let thisBook = myLibrary[bookIndex].Title;
    thisBook = thisBook.replace(/\s+/g, '');
    const deleteBook = document.querySelector(`.${thisBook}`);
    myLibrary.splice(bookIndex, 1);
    hideAllMainContent();
    deleteBook.remove();
}


