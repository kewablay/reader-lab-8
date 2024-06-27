const API_KEY_DEFAULT = "https://openlibrary.org/";
const API_KEY_SEARCH = "https://openlibrary.org/search.json"; // ?q="search-term"
const API_KEY_CURRENTLY_READING =
  "https://openlibrary.org/people/mekBot/books/currently-reading.json?limit=11";
const API_KEY_ALREADY_READ =
  "https://openlibrary.org/people/mekBot/books/already-read.json?limit=11";
const API_KEY_WANT_TO_READ =
  "https://openlibrary.org/people/mekBot/books/want-to-read.json?limit=11";

export const API_KEYS = {
  default: API_KEY_DEFAULT,
  search: API_KEY_SEARCH,
  currentlyReading: API_KEY_CURRENTLY_READING,
  alreadyRead: API_KEY_ALREADY_READ,
  wantToRead: API_KEY_WANT_TO_READ,
};

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
// /page/n1/mode/2up?ref=ol&view=theater
