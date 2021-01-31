//Global Variables
let myLibrary = [];
const form = document.getElementById('bookform');
const renderCollection = localStorage.setItem('collectionEntry', `Title of book: ${''} by ${''}.`);

//Book Object
class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

//Methods to add/remove to/from library
function createNewBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readstatus').value

    return new Book(title, author, pages, readStatus);
}

function addNewBook(e){
    e.preventDefault();

    addEntryToLibrary(createNewBook());
    console.log(myLibrary);
}

function addEntryToLibrary(newEntry) {

    const { title } = newEntry.title;

    switch(newEntry){
        case myLibrary.find(book => book.title === title):
            return false;
        default:
            myLibrary.push(newEntry);
    }

    

    /* const entry = new Book(title, author, pages, readStatus)
    
    myLibrary.push(entry);

    const entry_serialized = JSON.stringify(entry);

    localStorage.setItem(`${title}`, entry_serialized)

    const entry_deserialized = JSON.parse(localStorage.getItem(`${title}`));

    console.log(localStorage) */
}



function showCollection(title) {
    const collection = document.getElementById('collection');
    
    for(let i = 0; i < localStorage.length; i++) {
        collection.innerHTML = `Title of book: ${localStorage.getItem(`${title}`)} by .author}.`
    }
}

form.addEventListener('submit', addNewBook);