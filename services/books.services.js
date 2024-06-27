import { API_KEYS } from "../scripts/config.js";

export async function getBooks() {
  const response = await fetch(API_KEYS.currentlyReading);
  const data = await response.json();
  return data;
}

export async function searchBook(title) {
  const repsonse = await fetch(`${API_KEYS.search}?q=${title}`);
  const data = await repsonse.json();
  return data;
}
