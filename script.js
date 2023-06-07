


let library = [
    //store books
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    library.push(this)
};

function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
    displayBooks()
};

function removeBook(index) {
    // select by nth child? input (numbered books)?


  //  let index = library.indexOf(value);
    if (index > -1) {
      library.splice((index-1), 1);
    }
    displayBooks()
    return library;
    
        //loop until index
    //remove library index
    // remove from array and DOM
};



/*
readtxt.addEventListener('click' () => {
    identify index
    if statement (if this.read ==)
    alter read (this.read =)
    update display
});




function toggleRead(index) { // move to prototype?
    // alter array items
    //book index, if read => unread, if unread => read
    // toggle read status
}
*/
//function editBook(){} // move to prototype?

function displayBooks() {
    const bookdisplay = document.querySelector('.bookdisplay')
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(bookdisplay)
    for (let i in library) {
        let card = document.createElement('div')
        card.classList.add('card');
        bookdisplay.append(card);
        
        let sectionOne = document.createElement('div')
        sectionOne.classList.add('sectionOne');
        card.append(sectionOne);

        card.dataset.number = (Number(i) + 1);      // card.dataList.add(data-key)
        let bookNumber = document.createElement('div')
        bookNumber.textContent = `${card.dataset.number}.`
        bookNumber.classList.add('bookNumber')
        sectionOne.append(bookNumber);

        let titletxt = document.createElement('div');
        titletxt.classList.add('title');
        titletxt.textContent = `${library[i].title}`;
        sectionOne.append(titletxt);

        let authortxt = document.createElement('div');
        authortxt.classList.add('author');
        authortxt.textContent = `${library[i].author}`;
        sectionOne.append(authortxt);

        let pagestxt = document.createElement('div');
        pagestxt.classList.add('pages');
        pagestxt.textContent = `${library[i].pages} pages`;
        sectionOne.append(pagestxt);

        let sectionButtons = document.createElement('div')
        sectionButtons.classList.add('sectionButtons');
        card.append(sectionButtons);

        let removebtn = document.createElement('button');
        removebtn.classList.add('remove');
        removebtn.textContent = 'REMOVE';
        sectionButtons.append(removebtn);

        let readtxt = document.createElement('button');
        readtxt.classList.add('read');
        readtxt.textContent = `${library[i].read}`;
        sectionButtons.append(readtxt);
        // convert remove/read to button corresponds with number, alter array
        // section two for read and remove buttons
        // align buttons (try grid auto rows column start/end)
        readtxt.addEventListener('click', () => {
            if (library[i].read == 'Unread') {
                library[i].read = 'Read'
            }
            else if (library[i].read == 'Read') {
                library[i].read = 'Unread'
            }
            displayBooks();
        });
    }

};

window.addEventListener("DOMContentLoaded", () => {
    const submitbtn = document.querySelector('#submit');
    submitbtn.addEventListener("click", function(e){
    e.preventDefault();
    });

    submitbtn.addEventListener('click', () => {
        const titleInput = document.querySelector('#title');
        const authorInput = document.querySelector('#author');
        const pagesInput = document.querySelector('#pages');
        const checked = document.querySelector('input[name=readstatus]:checked');

        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, checked.value);

        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        
        let radiobtns = document.getElementsByName("readstatus");
        for(let i = 0; i <radiobtns.length;i++)
        radiobtns[i].checked = false;
    })
});



//addBookToLibrary('ogngh', 'fsda', '6', 'unread')
//addBookToLibrary('fxcvdvdasdad', 'fsdfsASs', '6', 'read')



    // display in DOM
        
//Write a function that loops through the array and displays each book on the page.
//You can display them in some sort of table, or each on their own “card”.
//It might help for now to manually add a few books to your array so you can see the display.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// PREVENT DUPLICATION ***

// submit add event listener, prevent default
// trigger add function, pass params

// if checked read/unread, green/red
// add remove and toggle read buttons, ckeck icon :after


// style/position/popup form
// sign in/storage? array as cookies, display onload
// move sections
// experiment with layout, color scheme, shadows, gradients, icons






// combine addbook and displaybook functions, refactor
//function rearrange() {}

//for in,   onscreen txtcontent, append child to bookdisplay,
// css, book variable names,
//  addBookToLibrary('fat', 'fatty', '23', 'no')

//let i = 0; i <= library.length; i++

// const para = bookdisplay.createElement("div");
// const node = document.createTextNode("This is a paragraph.");
