Book Reader App
Overview
The Book Reader App is a web-based application designed to provide a seamless and interactive reading experience. With features like text rendering, pagination, bookmarking, search functionality, and customizable reading settings, this app serves as a comprehensive tool for avid readers. The app is built using native JavaScript, CSS, and HTML, with additional libraries and APIs for enhanced functionality.


<!-- 
// pattern for book cover
// https://covers.openlibrary.org/b/$key/$value-$size.jpg

// IN MY CASE THIS IS THE PATTERN THAT WORKS FOR THE DATA I GET BACK FROM THIS API
// key - isbn, ocl, lccn, olid, id
// value = cover_edition_key -- can be null for some books / I'll figure out how to handle this
// size = S, M, L

// https://covers.openlibrary.org/b/isbn/$cover_edition_key-$size.jpg

{
  /* <img src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" /> */
}

// WE SEARCH FOR THE BOOK USING THE TITLE TO GET THE DETAILS


// the id will be used to get book detail

//    pattern for book detail
// https://openlibrary.org/books/OL16568759W.json

//

//
// This will help me get the
// https://openlibrary.org/api/books?bibkeys={ISBN_number}&format=json&jscmd=data

// GEtting into theatre mode in open library
// /mode/2up?ref=ol&view=theater
// /page/n1/mode/2up?ref=ol&view=theater -->