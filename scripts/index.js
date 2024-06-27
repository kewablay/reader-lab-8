import { getBooks } from "../services/books.services.js";
import { displayBooks } from "./ui.js";


document.addEventListener("DOMContentLoaded", () => {
  // get books from API and display them
  getBooks().then((books) => {
    displayBooks(books);
  });

  // when a book is clicked show details handled inside swipper.js
});
