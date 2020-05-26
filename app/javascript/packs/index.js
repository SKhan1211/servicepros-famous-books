import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from "./store/store";

import * as APIBookUtil from './util/books_api_util';

document.addEventListener('DOMContentLoaded', async () => {
  const persistedState = sessionStorage.getItem("SPFamousBooksAPI-reduxState-SK")
    ? JSON.parse(sessionStorage.getItem("SPFamousBooksAPI-reduxState-SK"))
    : {};

  let store;
  if (!Object.keys(persistedState).length) {

    // Fetch books from my custom API and set in correct order alphabetically
    let books = await APIBookUtil.fetchBooks();
    books.sort((a, b) => {
      if (a.title[0].toUpperCase() > b.title[0].toUpperCase()) return 1;
      else if (a.title[0].toUpperCase() < b.title[0].toUpperCase()) return -1;
      else return 0;
    });

    // Append random price, rating, and isbn to every entry that is null
    books.map(book => {
      if (book.description === null) console.log(book.title)
    //   if (book.price === null) book.price = APIBookUtil.createRandomPrice();
    //   if (book.rating === null) book.rating = APIBookUtil.createRandomRating();
    //   if (book.isbn === null) book.isbn = APIBookUtil.createRandomIsbn();
    });

    const preloadedState = {
      entities: {
        books,
        newReleases: [books[16], books[45], books[97]],
      },
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore(persistedState)
  };

  // Test functions for Redux store, remove in production
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  store.subscribe(() => {
    sessionStorage.setItem("SPFamousBooksAPI-reduxState-SK", JSON.stringify(store.getState()));
  });

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
