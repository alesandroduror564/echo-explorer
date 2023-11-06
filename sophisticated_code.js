// file: sophisticated_code.js

// This code is a sophisticated implementation of a library management system.
// It includes advanced features like search, add, update, and delete operations on books.

class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  updateBook(title, updatedBook) {
    this.books = this.books.map(book => {
      if (book.title === title) {
        return updatedBook;
      }
      return book;
    });
  }

  searchBooks(searchTerm) {
    const searchResults = [];
    for (const book of this.books) {
      if (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }
}

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Novel");
const book3 = new Book("1984", "George Orwell", 1949, "Dystopian");
const book4 = new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("Library Catalog:");
console.log(library.books);

console.log("Searching books with 'novel' genre:");
console.log(library.searchBooks("novel"));

console.log("Removing book with title '1984'");
library.removeBook("1984");
console.log(library.books);

console.log("Updating book title 'To Kill a Mockingbird'");
library.updateBook(
  "To Kill a Mockingbird",
  new Book("TKAM", "Harper Lee", 1960, "Novel")
);
console.log(library.books);