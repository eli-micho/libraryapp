//Global Variables
let myLibrary = [];
const form = document.getElementById('bookform');
const removeBtn = document.getElementById('removeBtn');
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

    addEntryToLibrary(createNewBook())
    updateCollection();
}

function addEntryToLibrary(newEntry) {

    const { title } = newEntry.title;

    switch(newEntry){
        case myLibrary.find(book => book.title === title):
            return false;
        default:
            myLibrary.push(newEntry);
            saveToLocal();
    }

    renderBookToLibrary(newEntry);
}

function removeFromLibrary(bookToRemove) {
    myLibrary = myLibrary.filter((book) => book.title !== bookToRemove);
    saveToLocal()
    updateCollection()
}

//Render Book Collection
const collection = document.getElementById('collection');

function updateCollection() {
    resetCollection();
    for(let el of myLibrary){
        renderBookToLibrary(el)
    }
}

function resetCollection() {
    collection.innerHTML = '';
}


function renderBookToLibrary(book) {
    const bookWrap = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const readStatus = document.createElement('h3');
    const removeBtn = document.createElement('button');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readStatus.textContent = book.readStatus;

    removeBtn.classList.add('btn');
    removeBtn.setAttribute('id', 'removeBtn');
    removeBtn.innerHTML = 'Remove Entry';

    bookWrap.appendChild(title);
    bookWrap.appendChild(author);
    bookWrap.appendChild(pages);
    bookWrap.appendChild(readStatus);
    bookWrap.appendChild(removeBtn);
    collection.appendChild(bookWrap);
}

//Event Listeners
form.addEventListener('submit', addNewBook);
document.addEventListener('click', function(e){
    if(e.target && e.target.id == 'removeBtn'){
        removeFromLibrary(e.target.parentNode.firstChild.innerHTML)
    }
});

//Update Local Storage
function saveToLocal() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function restoreLocal() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    if(myLibrary == null) myLibrary = [];
    updateCollection();
}

restoreLocal()