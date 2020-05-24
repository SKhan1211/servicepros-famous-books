export const fetchBooks = () => {
  return fetch("https://servicepros-test-api.herokuapp.com/api/v1/books", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
}