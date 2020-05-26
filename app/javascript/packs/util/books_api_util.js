export const fetchBooks = () => {
  return fetch("/api/v1/books", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export const fetchBook = bookTitle => {
  return fetch(`/api/v1/books/${bookTitle}`, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};