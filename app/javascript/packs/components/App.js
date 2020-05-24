import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import BooksContainer from './books/books_container';
import SideBar from './sidebar/sidebar';

class App extends React.Component {
  render () {
    // Reload the page when using back and forward buttons, 
      // must use cookies to persist user session since no login/database persistance feature
    window.onpopstate = () => location.reload();
    return (
      <div style={{ display: "flex" }}>
        {location.pathname === "/books" || location.pathname === "/collection" ? <SideBar /> : null}
        <Switch>
          <Route exact path="/books" component={BooksContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;