


let library = [
    //store books
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    library.push(this)

    //const bookdisplay = document.bookdisplay
    //const card = document.createElement('div class card')
    // bookdisplay.append('card')
    // card.textContent = ''
    // the constructor...
};

function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
    // do stuff here

};

function removeBook(index) {
    //remove library index
    // remove from array and DOM
}

function toggleRead(index) { // move to prototype?
    //book index, if read => unread, if unread => read
    // toggle read status
}

function editBook(){} // move to prototype?

function displayBooks() {
    const bookdisplay = document.querySelector('.bookdisplay')

    for (let i in library) {
        console.log(
            `${library[i].title}, by ${library[i].author}, ${library[i].pages} pages long, read: ${library[i].read}`
        )
        let card = document.createElement('div')
        card.classList.add('card');
        bookdisplay.append(card)
//        card.textContent = `${library[i].title}, by ${library[i].author}, ${library[i].pages} pages long, read: ${library[i].read}`
        
        let sectionOne = document.createElement('div')
        sectionOne.classList.add('sectionOne');
        card.append(sectionOne)
        let title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `${library[i].title}`;
        sectionOne.appendChild(title);
        let author = document.createElement('div');
        author.classList.add('author');
        author.textContent = `by ${library[i].author}`;
        sectionOne.appendChild(author);
        let pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = `${library[i].pages} pages`;
        sectionOne.appendChild(pages);
        let read = document.createElement('div');
        read.classList.add('read');
        read.textContent = `${library[i].read}`;
        card.appendChild(read);

        //append div
        //div.textContent = library[i].item (for all info)
    };

//addBookToLibrary('ogngh', 'fsda', '6', 'unread')
//addBookToLibrary('fxcvdvdasdad', 'fsdfsASs', '6', 'read')



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
