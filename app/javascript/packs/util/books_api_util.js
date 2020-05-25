export const fetchBooks = () => {
  return fetch("https://servicepros-test-api.herokuapp.com/api/v1/books", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
}

export const createRandomPrice = () => {
  let randomNum = Math.random() * 25;
  if (randomNum < 4) return createRandomPrice();
  else return randomNum.toFixed(2);
}

export const createRandomRating = () => {
  let randomNum = Math.random() * 6;
  if (randomNum < 1) return createRandomRating();
  else return Math.floor(randomNum);
}
