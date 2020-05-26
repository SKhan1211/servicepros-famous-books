import React from "react";
import { Link, withRouter } from 'react-router-dom';

import MyLogo from '../../../../assets/images/my_logo.png';
import Book from '../../../../assets/images/placeholder_book_cover.gif';

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNav: '',
      bookmarkedBooks: []
    }
  }

  componentDidMount() {
    // Highlights the page we are currently on in sidebar
    if (this.props.location.pathname === '/books') {
      this.handleNavHighlighting('books');
      this.setState({ selectedNav: this.props.location.pathname })
    } else if (this.props.location.pathname === '/collection') {
      this.handleNavHighlighting('collection');
      this.setState({ selectedNav: this.props.location.pathname });
    }

    // Set bookmarkedBooks to state
    this.setState({ bookmarkedBooks: this.props.bookmarkedBooks })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      // This algorithm clears and adds the blue highlight to sidebar nav as needed
      if (this.props.location.pathname === '/books' || this.props.location.pathname === '/collection') {
        // Clear blue highlight from previous li
        let selectedLi = document.getElementsByClassName("sidebar__div__browse__selected-li")[0];
        if (selectedLi !== undefined) { // If selectedLi exists
          selectedLi.className = '';
          selectedLi.firstElementChild.className = '';
          selectedLi.firstElementChild.firstElementChild.className = '';
          let divMarker = document.getElementsByClassName('sidebar__div__li__div-marker')[0];
          selectedLi.removeChild(divMarker);
        }

        if (this.props.location.pathname === '/books') this.handleNavHighlighting('books');
        else if (this.props.location.pathname === '/collection') this.handleNavHighlighting('collection');
      } else {
        // Clear blue highlight from previous li
        let selectedLi = document.getElementsByClassName("sidebar__div__browse__selected-li")[0];
        if (selectedLi !== undefined) { // If selectedLi exists
          selectedLi.className = '';
          selectedLi.firstElementChild.className = '';
          selectedLi.firstElementChild.firstElementChild.className = '';
          let divMarker = document.getElementsByClassName('sidebar__div__li__div-marker')[0];
          selectedLi.removeChild(divMarker);
        }
      }
    }

    if (prevProps.bookmarkedBooks !== this.props.bookmarkedBooks) {
      this.setState({ bookmarkedBooks: this.props.bookmarkedBooks });
    }
  }

  handleNavHighlighting(path) {
    let liNode = document.querySelectorAll(`[data-sidebar-nav-type='${path}']`)[0]
      liNode.className = "sidebar__div__browse__selected-li"; // Put blue around selected li
      liNode.firstElementChild.className = "sidebar__div__browse__selected-li__link-p" // Cancel pointer events
      liNode.firstElementChild.firstElementChild.className = "sidebar__div__browse__selected-li__link-p" // Cancel hover events
      let divMarker = document.createElement('div');
      divMarker.className = "sidebar__div__li__div-marker"; // Append gray dix box
      liNode.appendChild(divMarker);

      this.setState({ selectedNav: this.props.location.pathname })
  }

  render() {
    return (
      <div className="sidebar__outer-container">
        <section className="sidebar__section__logo-container">
          <img
            src={MyLogo}
            onClick={() => {
              window.location.href = "/";
            }}
          ></img>
        </section>
        <section className="sidebar__section__lists-container">
          <div className="sidebar__div__browse-container">
            <header>Browse</header>
            <ul>
              <li data-sidebar-nav-type="books">
                <Link to="/books">
                  <p>Bookstore</p>
                </Link>
              </li>
              <li data-sidebar-nav-type="collection">
                <Link to="/collection">
                  <p>My Collection</p>
                </Link>
              </li>
              <li data-sidebar-nav-type="explore">
                <Link to="/explore">
                  <p># Explore</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar__div__new_releases-container">
            <header>New Releases</header>
            <ul>
              {this.props.newReleases.map((book) => (
                <li
                  key={`new-release-${book.title}`}
                  className="sidebar__div__book-container"
                  onClick={() => this.props.history.push(`/book/${book.title}`)}
                >
                  <img src={book.image} />
                  <div className="sidebar__div__book__text">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar__div__bookmarks-container">
            <header>Bookmarked</header>
            <ul>
              {this.state.bookmarkedBooks.map((book) => (
                <li key={`bookmarked-${book.title}`} className="sidebar__div__book-container">
                  <img src={book.image} />
                  <div className="sidebar__div__book__text">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                  </div>
                </li>
              ))}
              <li>
                <p>All Bookmarked</p>
              </li>
            </ul>
          </div>
          <footer>Created By: Suhaib Khan</footer>
        </section>
      </div>
    );
  }
}

export default withRouter(SideBar);
