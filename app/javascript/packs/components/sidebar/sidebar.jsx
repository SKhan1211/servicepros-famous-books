import React from "react";
import MyLogo from '../../../../assets/images/my_logo.png';
import Book from '../../../../assets/images/placeholder_book_cover.gif';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar__outer-container">
        <section className="sidebar__section__logo-container">
          <img src={MyLogo}></img>
        </section>
        <section className="sidebar__section__lists-container">
          <div className="sidebar__div__browse-container">
            <header>Browse</header>
            <ul>
              <li><p>Bookstore</p></li>
              <li><p>My Collection</p></li>
              <li><p>Explore</p></li>
            </ul>
          </div>
          <div className="sidebar__div__new_releases-container">
            <header>New Releases</header>
            <ul>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 1</p></li>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 2</p></li>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 3</p></li>
            </ul>
          </div>
          <div className="sidebar__div__bookmarks-container">
            <header>Bookmarked</header>
            <ul>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 1</p></li>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 2</p></li>
              <li className="sidebar__div__book-container"><img src={Book} /><p>Book 3</p></li>
              <li><p>All Bookmarked</p></li>
            </ul>
          </div>
          <footer>Created By: Suhaib Khan</footer>
        </section>
      </div>
    )
  }
}

export default SideBar;
