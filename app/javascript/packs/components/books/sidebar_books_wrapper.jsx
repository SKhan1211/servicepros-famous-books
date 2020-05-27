import React from "react";
import { Route } from "react-router-dom";

import SideBarContainer from '../sidebar/sidebar_container';
import BookstoreContainer from './bookstore_container';
import BookPageContainer from "../book_page/book_page_container";
import BookmarkedContainer from "./bookmarked_container";
import PurchasedContainer from "./purchased_container";

const SideBarBooksWrapper = (props) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideBarContainer props={props} />
      <div
        style={{
          minWidth: "216px",
          width: "17.6vw",
          background: "#0d1721",
          height: "1%",
        }}
      ></div>
      <Route exact path="/books" component={BookstoreContainer} />
      <Route exact path="/book/:title" component={BookPageContainer} />
      <Route exact path="/bookmarked" component={BookmarkedContainer} />
      <Route exact path="/collection" component={PurchasedContainer} />
    </div>
  );
};

export default SideBarBooksWrapper