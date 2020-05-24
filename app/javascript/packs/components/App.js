import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import BooksContainer from './books/books_container';
import SideBar from './sidebar/sidebar';

class App extends React.Component {
  render () {
    return (
      <div style={{display: 'flex'}}>
        {location.pathname === "/books" ? <SideBar /> : null}
        <Switch>
          <Route exact path="/books" component={BooksContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;