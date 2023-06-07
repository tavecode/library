// Library App


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
    if (index > -1) {
      library.splice(index, 1);
    }
    displayBooks()
    return library;
};



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

        card.dataset.number = (Number(i) + 1);
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

        removebtn.addEventListener('click', () => {
            if (library[i]!= undefined) {
                removeBook(i);
                displayBooks();
            }
        });

        let readtxt = document.createElement('button');
        if (library[i].read == 'Read') {
            readtxt.classList.add('read');   
        }
        else if (library[i].read == 'Unread') {
            readtxt.classList.add('unread');
        }
        readtxt.classList.add('readbtn');
        readtxt.textContent = `${library[i].read}`;
        sectionButtons.append(readtxt);

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

// add remove and toggle read buttons, check icon :after
// style/position/popup form
// sign in/storage? array as cookies, display onload
// move sections
// experiment with layout, color scheme, shadows, gradients, icons
// rearrange and edit books

