import React from "react";
import { Link, withRouter } from 'react-router-dom';

import MyLogo from '../../../../assets/images/my_logo.png';
import Book from '../../../../assets/images/placeholder_book_cover.gif';

const BOOK_TITLES = [
'1984', 'A Clockwork Orange', 'A Dance to the Music of Time', 'A Death in the Family',
'A Handful of Dust', 'A House for Mr. Biswas', 'A Passage to India', 'All the King\'s Men',
'American Pastoral', 'An American Tragedy', 'Animal Farm', 'Appointment in Samarra',
'Are You There God? It\'s Me, Margaret', 'At Swim-Two-Birds', 'Atonement', 'Beloved', 'Blood Meridian',
'Brideshead Revisited', 'Cheese is good', 'Call It Sleep', 'Catch-22', 'Death Comes for the Archbishop',
'Deliverance', 'Dog Soldiers', 'Falconer', 'Go Tell it on the Mountain', 'Gone With the Wind',
'Gravity\'s Rainbow', 'Herzog', 'Housekeeping', 'I, Claudius',
'Infinite Jest', 'Invisible Man', 'Light in August', 'Lolita',
'Lord of the Flies', 'Loving', 'Lucky Jim', 'Midnight\'s Children', 'Money',
'Mrs. Dalloway', 'Naked Lunch', 'Native Son', 'Neuromancer', 'Never Let Me Go',
'On the Road', 'One Flew Over the Cuckoo\'s Nest', 'Pale Fire', 'Play It As It Lays', 'Portnoy\'s Complaint',
'Possession', 'Rabbit, Run', 'Ragtime', 'Red Harvest', 'Revolutionary Road',
'Slaughterhouse Five', 'Snow Crash', 'The Spy Who Came in From the Cold', 'The Sound and the Fury', 'The Sportswriter',
'The Confessions of Nat Turner', 'The Adventures of Augie March', 'The Assistant', 'The Berlin Stories', 'The Big Sleep',
'The Blind Assassin', 'The Bridge of San Luis Rey', 'The Catcher in the Rye', 'The Corrections', 'The Crying of Lot 49',
'The Day of the Locust', 'The Death of the Heart', 'The French Lieutenant\'s Woman', 'The Golden Notebook', 
'The Grapes of Wrath', 'The Great Gatsby', 'The Heart is A Lonely Hunter', 'The Heart of the Matter', 
'The Lion, The Witch and the Wardrobe', 'The Lord of the Rings', 'The Sheltering Sky', 'The Sot-Weed Factor', 
'The Man Who Loved Children', 'The Moviegoer', 'The Painted Bird', 'The Power and the Glory', 'The Prime of Miss Jean Brodie',
'The Recognitions', 'The Sun Also Rises', 'Their Eyes Were Watching God', 'Things Fall Apart', 'To Kill a Mockingbird', 
'To the Lighthouse', 'Tropic of Cancer', 'Ubik', 'Under the Net', 'Under the Volcano', 
'Watchmen', 'White Noise', 'White Teeth', 'Wide Sargasso Sea',
]

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNav: '',
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
              <li className="sidebar__div__book-container">
                <img src={Book} />
                <p>Book 1</p>
              </li>
              <li className="sidebar__div__book-container">
                <img src={Book} />
                <p>Book 2</p>
              </li>
              <li className="sidebar__div__book-container">
                <img src={Book} />
                <p>Book 3</p>
              </li>
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
