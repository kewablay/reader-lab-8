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

