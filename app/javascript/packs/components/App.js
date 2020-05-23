import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import Books from './books/books';
import SideBar from './sidebar/sidebar';

class App extends React.Component {
  render () {
    return (
      <div style={{display: 'flex'}}>
        {location.pathname === "/books" ? <SideBar /> : null}
        <Switch>
          <Route exact path="/books" component={Books} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;