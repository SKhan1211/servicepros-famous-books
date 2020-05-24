import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from "./store/store";

import * as APIBookUtil from './util/books_api_util';

document.addEventListener('DOMContentLoaded', async () => {
  let store;
  
  let books = await APIBookUtil.fetchBooks();
  books.forEach(book => {
    book.price = APIBookUtil.createRandomPrice();
    book.rating = APIBookUtil.createRandomRating();
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
