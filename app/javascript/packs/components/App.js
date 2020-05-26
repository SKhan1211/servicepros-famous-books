import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import BooksContainer from './books/books_container';
import SideBarContainer from './sidebar/sidebar_container';
import BookPageContainer from './book_page/book_page_container';

class App extends React.Component {
  render () {
    // Reload the page when using back and forward buttons, 
      // must use localStorage to persist user session since no login/database persistance feature
    window.onpopstate = () => location.reload();
    return (
      <div style={{ display: "flex" }}>
        {location.pathname === "/books" || 
          location.pathname === "/collection" ||
          location.pathname.includes("/book/") ? <SideBarContainer /> : null}
        <Switch>
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/book/:title" component={BookPageContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;