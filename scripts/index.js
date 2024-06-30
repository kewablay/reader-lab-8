import { getBooks } from "../services/books.services.js";
import { bookLoading, clearBookLoading, displayBooks } from "./ui.js";
import { loadTheme, showAnimations } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations
  showAnimations();
  loadTheme();
  bookLoading(); // show loading animation

  // get books from API and display them
  getBooks().then((books) => {
    setTimeout(() => {
      clearBookLoading();
      displayBooks(books);
    }, 1000);
  });

  // when a book is clicked show details handled inside swipper.js
});
