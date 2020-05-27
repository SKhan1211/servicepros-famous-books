import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import BookstoreContainer from './books/bookstore_container';
import SideBarContainer from './sidebar/sidebar_container';
import BookPageContainer from './book_page/book_page_container';
import BookmarkedContainer from './books/bookmarked_container';
import PurchasedContainer from './books/purchased_container';
import PurchaseEffect from './purchase/purchase_effect';
import Explore from './explore/explore';

class App extends React.Component {
  render () {
    return (
      <div style={{ display: "flex" }}>
        {/* If location is any of the below, add the sidebar */}
        {
          // location.pathname === "/books" ||
          // location.pathname === "/collection" ||
          // location.pathname.includes("/book/") ||
          // location.pathname === "/bookmarked" ||
          // location.pathname === "/purchase" ? (
            // <SideBarContainer />
          // ) : null
        }

        {/* Sidebar space holder div */}
        {
          // location.pathname !== "/" ?
          //   <div style={{ minWidth: "216px", width: "17.7vw", background: "#0d1721" }}></div> 
          // : null
        }

        <div className="home-page__animation-null"></div>

        <Switch>
          <Route exact path="/books" component={BookstoreContainer} />
          <Route exact path="/book/:title" component={BookPageContainer} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/bookmarked" component={BookmarkedContainer} />
          <Route exact path="/collection" component={PurchasedContainer} />
          <Route exact path="/purchase" component={PurchaseEffect} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;