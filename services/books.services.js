import { API_KEYS } from "../scripts/config.js";

export async function getBooks() {
  const response = await fetch(API_KEYS.currentlyReading);
  const data = await response.json();
  return data;
}
