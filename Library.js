class Book {
    #title
    #author
    #isAvailible = true;

    constructor(title, author, isAvailible) {
        this.#title = title;
        this.#author = author;
        this.#isAvailible = isAvailible;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author
    }

    isAvailible() {
        return this.#isAvailible
    }

    checkoutBook() {
        this.#isAvailible = false
    }
}

const Book1 = new Book ('The mom test', `Rob Fitzpatrick`, true);
const Book2 = new Book ('The Design of Everyday Things', `Don Norman`, false);
const Book3 = new Book ('The Design', `Don Port`, false);
const Book4 = new Book ('Template', `Port Doner`, true);
const Book5 = new Book ('True Book', `Doner Kebab`, true);


class Library {
    constructor(books) {

    }

    addBook(book) {
        

    }

    checkoutBook(title) {

    }

    viewAvailableBooks() {
        console.log(`This books are availible: ${isAvailible}`)
    }
    
}

const myLibrary = ;
