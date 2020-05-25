import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from "./store/store";

import * as APIBookUtil from './util/books_api_util';

document.addEventListener('DOMContentLoaded', async () => {
  let store;
  
  // Fetch books from Service Pros API and set in correct order alphabetically
  let books = await APIBookUtil.fetchBooks();
  let unorderedEle = books.slice(0, 1);
  books = books.slice(1, 18).concat(unorderedEle).concat(books.slice(18));

  // Append random price and rating to every entry as well as the image from Google Books API
  books.map(async book => {
    book.price = APIBookUtil.createRandomPrice();
    book.rating = APIBookUtil.createRandomRating();
    book.image = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${book.title}&maxResults=1`
    )
      .then((res) => res.json())
      .then((bookInfo) => bookInfo.items[0].volumeInfo.imageLinks.smallThumbnail);
  });

  const preloadedState = {
    entities: {
      books
    },
  };

  store = configureStore(preloadedState);
  
  // Test functions for Redux store, remove in production
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
