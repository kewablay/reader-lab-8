export const displayBooks = (books) => {
  const bookContainer = document.querySelector(".swiper-wrapper");

  books.reading_log_entries.forEach((book) => {
    let singleBook = book.work;

    // Create a div element for each book
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("swiper-slide", "bg-gray-500", "h-[20rem]", "rounded-lg", "overflow-hidden");

    // Create an img element for the book cover
    const img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/olid/${singleBook.cover_edition_key}-L.jpg`;
    img.classList.add("w-full", "h-full", "object-cover");
    img.alt = singleBook.title; // Add alt text if needed

    // Append the img element to the book div
    bookDiv.appendChild(img);

    // Append the book div to the main container
    bookContainer.appendChild(bookDiv);
  });
};
