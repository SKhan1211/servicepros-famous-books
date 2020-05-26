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

export const createRandomIsbn = () => {
  let randomIsbn = '';
  while (randomIsbn.length < 13) {
    randomIsbn += Math.floor(Math.random() * 10).toString();
  }
  if (randomIsbn[0] === '0') randomIsbn = '9' + randomIsbn.slice(1);
  return randomIsbn;
}
