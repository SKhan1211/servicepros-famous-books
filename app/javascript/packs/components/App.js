import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import BooksContainer from './books/books_container';
import SideBarContainer from './sidebar/sidebar_container';
import BookPageContainer from './book_page/book_page_container';
import Explore from './explore/explore';

class App extends React.Component {
  render () {
    return (
      <div style={{ display: "flex" }}>
        {/* If location is any of the below, add the sidebar */}
        {location.pathname === "/books" || 
          location.pathname === "/collection" ||
          location.pathname.includes("/book/") ? <SideBarContainer /> : null}
        <Switch>
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/book/:title" component={BookPageContainer} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;