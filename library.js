//An array to store the books
let myLibrary = [];
//A constructor(function) creates book objects.
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return 'The "' + title + '" by ' + author + 
        ', ' + pages + ' pages, has read:' + read + '.';
    }
}
//first book created
const bible = new Book('BIBLE', 'Prophets of God', 1200, 'no')
//simple fuction adds book objects to myLibrary array
function addBookToLibrary(book){
      myLibrary.push(book);
}
//we add bible as the first book to the array myLibrary
addBookToLibrary(bible);
//here is the board that the books are displayed
const board = document.getElementById('books');
//here is the overview of the books info
const overview = document.getElementById('overview');
//appends book to List Of Books
function displayBook(){
    const item = document.createElement('p');
    item.style.width = '5rem';
    item.style.height = '7rem';
    item.style.backgroundColor = 'palevioletred';
    item.style.border = '1mm solid BLACK';
    item.style.marginLeft = '1em';
    item.style.textAlign = 'center';
    item.style.fontSize = '1rem';
    item.style.boxShadow = '4px 6px 3px grey';
    item.setAttribute('data-index', myLibrary.length-1);
    let indexbook = item.getAttribute('data-index');
    console.log(indexbook)
    item.addEventListener('click', function(){
       const infoBook = document.createElement('div');
       infoBook.style.color = 'lightblue';
       infoBook.style.border = '1mm solid black';
       infoBook.style.margin = '1em';
       const titleofbook = document.createElement('h3')
       titleofbook.textContent = 'Title: ' + myLibrary[indexbook].title;
       const authorofbook = document.createElement('h3')
       authorofbook.textContent = 'Author: ' + myLibrary[indexbook].author;
       const pagesofbook = document.createElement('h3')
       pagesofbook.textContent = 'Number Of Pages: ' + myLibrary[indexbook].pages;
       const hasreadbook = document.createElement('h3')
       hasreadbook.textContent = 'Has read: ' + myLibrary[indexbook].read;

       infoBook.appendChild(titleofbook);
       infoBook.appendChild(authorofbook);
       infoBook.appendChild(pagesofbook);
       infoBook.appendChild(hasreadbook);
       
       overview.appendChild(infoBook);
       const deletebook = document.createElement('button');
       deletebook.textContent = 'DELETE';
       deletebook.style.backgroundColor = 'red';
       deletebook.style.position = 'relative';
       deletebook.style.left = '7em';
       deletebook.style.width = '20em';
       deletebook.addEventListener('click', function(){
        item.remove();
        overview.textContent = '';
       })
       overview.appendChild(deletebook);
    })
    for(let i =0; i < myLibrary.length; i++){

    
        let bookKeeper = myLibrary[i];
        let bookContent = bookKeeper.title;
        item.textContent = bookContent;
    }
   board.appendChild(item);
      
}

displayBook();

//save button
const btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
e.preventDefault();
const title = document.getElementById('booktitle').value;
console.log(title);
const author = document.getElementById('bookauthor').value;
console.log(author);
const pages = document.getElementById('pagenum').value;
console.log(pages);
const hasread = document.querySelector
('input[name="ans"]:checked').value;
console.log(hasread);
//create new book
const newEntry = new Book(title, author, pages, hasread);
//add book to array
addBookToLibrary(newEntry);
//display new book
displayBook();

})
 
//When save is pressed we call the book constructor with the
// data passed from the form and we add the book to the list
//and when a book is pressed from the list we display it's 
// info on the overview section.
//we need to find a way to display the info better