let library = [
    //store books
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    library.push(this)
    // the constructor...
};

function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
    // do stuff here

};

function removeBook() {
    // remove from array and DOM
}

function toggleRead() {
    // toggle read status
}

function editBook(){}

function displayBooks() {

    for (let i in library) {
        console.log(
            `${library[i].title}, by ${library[i].author}, ${library[i].pages} pages long, read: ${library[i].read}`
        )
        //append div
        //div.textContent = library[i].item (for all info)
    };

    // display in DOM
        
//Write a function that loops through the array and displays each book on the page.
//You can display them in some sort of table, or each on their own “card”.
//It might help for now to manually add a few books to your array so you can see the display.
}

//function rearrange() {}

//for in,   onscreen txtcontent, append child to bookdisplay,
// css, book variable names,
//  addBookToLibrary('fat', 'fatty', '23', 'no')

//let i = 0; i <= library.length; i++

// const para = bookdisplay.createElement("div");
// const node = document.createTextNode("This is a paragraph.");
