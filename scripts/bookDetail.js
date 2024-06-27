import { searchBook } from "../services/books.services.js";
import { clearBookDetailLoading, displayBookDetailLoading, displayBookDetail } from "./ui.js";
import { getQueryParams } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // get books from API and display them
  //   getBooks().then((books) => {
  //     displayBooks(books);
  //   });

  console.log("title: ", getQueryParams().title);

  let title = getQueryParams().title;

  if (title) {
    // Call the searchBook function
    displayBookDetailLoading();
    searchBook(title)
      .then((data) => {
        console.log("Search results:", data?.docs[0]);
        console.log("View Id:", data?.docs[0]?.ia[0]);
        // console.log("Search results:", data?.docs[0]?.isbn[0]);
        // You can update the UI with the search results here
        clearBookDetailLoading();
        displayBookDetail(data?.docs[0]);
      })
      .catch((error) => {
        console.error("Error searching for the book:", error);
      });
  }

  // when a book is clicked show details handled inside swipper.js
});
