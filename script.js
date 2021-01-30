//Variables
let myLibrary = [];
const form = document.getElementById('bookform');


//Functions
function Book(title, author, pages, readStatus) {

    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readstatus').value
    
    e.preventDefault()

    const entry = new Book(title, author, pages, readStatus)
    
    myLibrary.push(entry);
    showCollection()
    console.log(myLibrary[0]);
    
}

function showCollection() {
    const collection = document.getElementById('collection');
    
    for(let i = 0; i < myLibrary.length; i++) {
        collection.innerHTML = `Title of book: ${myLibrary[i].title} by ${myLibrary[i].author}.`
    }
}

form.addEventListener('submit', addBookToLibrary);