    const API_KEY_DEFAULT = "https://openlibrary.org/";
    const API_KEY_SEARCH = "https://openlibrary.org/";
    const API_KEY_CURRENTLY_READING =
    "https://openlibrary.org/people/mekBot/books/currently-reading.json";
    const API_KEY_ALREADY_READ =
    "https://openlibrary.org/people/mekBot/books/already-read.json";
    const API_KEY_WANT_TO_READ =
    "https://openlibrary.org/people/mekBot/books/want-to-read.json";

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
