import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import SideBarBooksWrapper from './books/sidebar_books_wrapper';
import BookmarkedContainer from './books/bookmarked_container';
import PurchasedContainer from './books/purchased_container';
import PurchaseEffect from './purchase/purchase_effect';
import Explore from './explore/explore';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="home-page__animation-null"></div>

        <Switch>
          <Route exact path="/books" component={SideBarBooksWrapper} />
          <Route exact path="/book/:title" component={SideBarBooksWrapper} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/bookmarked" component={SideBarBooksWrapper} />
          <Route exact path="/collection" component={SideBarBooksWrapper} />
          <Route exact path="/purchase" component={PurchaseEffect} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;