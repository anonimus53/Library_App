//An array to store the books
let myLibrary = [];
//A constructor(function) creates book objects.
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return 'The ' + title + ' by ' + author + 
        ', ' + pages + ' pages, ' + read + '.';
    }
}
//first book created
const bible = new Book('BIBLE', 'Prophets of God', 1200, 'not read yet')
//simple fuction adds book objects to myLibrary array
function addBookToLibrary(book){
      myLibrary.push(book);
}
//we add bible as the first book to the array myLibrary
addBookToLibrary(bible);
//hese id the board that the books are displayed
const board = document.getElementById('books')
//appends book to List Of Books
function displayBook(){
    const item = document.createElement('p');
    item.style.width = '5rem';
    item.style.height = '7rem';
    item.style.backgroundColor = 'palevioletred';
    item.style.border = '1mm solid BLACK';
    item.style.marginLeft = '1em';
    item.style.textAlign = 'center';
    item.style.fontSize = '1.5rem';
    item.style.boxShadow = '4px 6px 3px grey';
    for(let i =0; i < myLibrary.length; i++){

    
        let bookKeeper = myLibrary[i];
        let bookContent = bookKeeper.title;
        item.textContent = bookContent;
    }
   board.appendChild(item);
      
}
displayBook();
//ADD ++ button
const addButton = document.getElementById('add');
addButton.addEventListener('click', function(){
   
    
})
//first i need to make a form in the New Addition, then when- 
// add is pressed we call the book constructor with the
// data passed from the form and we add the book to the list
//and when a book is pressed from the list we display it's 
// infor on the overview section.