export function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get("title"),
  };
}

export const getApiImageUrl = (key) =>
  `https://covers.openlibrary.org/b/id/${key}-L.jpg`;

export const getBookPreviewLink = (key) =>
  `https://archive.org/details/${key}/page/540/mode/2up?ref=ol&view=theater`;
