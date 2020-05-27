import React from "react";
import { Link } from 'react-router-dom';
import Book from "../../../../assets/images/placeholder_book_cover.gif";
import LazyLoad, { forceCheck } from 'react-lazyload';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
    };

    this.handleGhostLis = this.handleGhostLis.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // Setting props to state after sorting if there is a sort query in URL
    if (this.props.location.search.length > 0) {
      let books = [...this.props.books];
      books.sort((a, b) => this.sortHelperMethod(a, b, this.props.path));
      if (this.props.path === 'rating') books.reverse();
      this.setState({
        books,
      });
    }
    
    // Setting up any needed ghost li's to push flexed elements to the left
    this.handleGhostLis();
    // Selecting correct sort title to make it not clickable
    let title = document.getElementsByClassName("books__header__title__sort-container")[0]
    if (this.props.path === 'alphabetical') {
      title.children[0].className = "books__header__sort__selected";
    } else if (this.props.path === 'price') {
      title.children[2].className = "books__header__sort__selected";
    } else {
      title.children[4].className = "books__header__sort__selected";
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // If books state changes, create the correct ghost lis
    if (prevState.books !== this.state.books) {
      this.handleGhostLis();
      forceCheck(); // Checks inital books are not lazy loaded
    }

    // If path changes, update selected title and then sort appropriately
    if (prevProps.path !== this.props.path) {
      document.querySelectorAll(`[data-title-type='${prevProps.path}']`)[0].className = '';
      document.querySelectorAll(
        `[data-title-type='${this.props.path}']`
      )[0].className = "books__header__sort__selected";
      this.handleSorting(this.props.path);
    }
  }

  handleGhostLis() {
    this.removeGhostLis(); // First clear all ghost li's that already exist before appending as needed
    let lis = Array.from(document.getElementsByClassName("books__ul__list-container")[0].children);
    if (lis.length % 4 !== 0) {
      // This algorithm appends ghost li's to the document to push items to the left if there are an uneven number
      let leftover = lis.length % 4;
      if (leftover === 1) { 
        for (let i = 0; i < 3; i++) {
          let li = document.createElement("li");
          li.className = "books__ul__list__li-hidden";
          document
            .getElementsByClassName("books__ul__list-container")[0]
            .appendChild(li);
        }
      } 
      else if (leftover === 2) {
        for (let i = 0; i < 2; i++) {
          let li = document.createElement("li");
          li.className = "books__ul__list__li-hidden";
          document
            .getElementsByClassName("books__ul__list-container")[0]
            .appendChild(li);
        }
      }
      else if (leftover === 3) {
        for (let i = 0; i < 1; i++) {
          let li = document.createElement("li");
          li.className = 'books__ul__list__li-hidden'
          document
            .getElementsByClassName("books__ul__list-container")[0]            
            .appendChild(li);
        }
      }
    } else if (lis.length < 4) {
      // This algorithm checks if there are less than 4 li's to append any needed ghost li's so the visible li's are pushed 
      // to the left
      let liLength = lis.length;
      if (liLength === 3) {
        for (let i = 0; i < 1; i++) {
          let li = document.createElement("li");
          li.className = "books__ul__list__li-hidden";
          document
            .getElementsByClassName("books__ul__list-container")[0]
            .appendChild(li);
        }
      } else if (liLength === 2) {
        for (let i = 0; i < 2; i++) {
          let li = document.createElement("li");
          li.className = "books__ul__list__li-hidden";
          document
            .getElementsByClassName("books__ul__list-container")[0]
            .appendChild(li);
        }
      } else if (liLength === 1) {
        for (let i = 0; i < 3; i++) {
          let li = document.createElement("li");
          li.className = "books__ul__list__li-hidden";
          document
            .getElementsByClassName("books__ul__list-container")[0]
            .appendChild(li);
        }
      }
    }
  }

  removeGhostLis() {
    let hiddenLis = document.getElementsByClassName("books__ul__list__li-hidden");
    while (hiddenLis.length > 0) hiddenLis[0].parentNode.removeChild(hiddenLis[0]);
  }

  handleSearch() {
    if (event.target.value) {
      let matches = [];
      this.props.books.forEach(book => {
        // The 3 variables below keep track of all escaped whitespace
        let escapedBookTitle = book.title.toLowerCase().replace(/\s+/g, '');
        let escapedBookAuthor = book.author.toLowerCase().replace(/\s+/g, '');
        let escapedSearchInput = event.target.value.toLowerCase().replace(/\s+/g, '');
        if (
          escapedBookTitle.includes(escapedSearchInput) ||
          escapedBookAuthor.includes(escapedSearchInput)
        ) matches.push(book)
      });
      // Using the sort helper method to sort user searches dynamically based on the url setting
      if (this.props.path === 'alphabetical' || this.props.path === 'price') matches.sort((a, b) => this.sortHelperMethod(a, b, this.props.path));
      else if (this.props.path === 'rating') matches.sort((a, b) => this.sortHelperMethod(a, b, this.props.path)).reverse();
      this.setState({ books: matches });
    } else {
      // Used when clearing out the search bar
      let books = [...this.props.books];
      books.sort((a, b) => this.sortHelperMethod(a, b, this.props.path));
      if (this.props.path === 'rating') books.reverse();
      this.setState({ books });
    }
  }

  createRatings(num) {
    // Algorithm to turn rating into Font Awesome icons
    let stars = [];
    let numOfUnfilled = 5 - num;

    for (let i = 0; i < num; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
      
    };

    for (let i = 0; i < numOfUnfilled; i++) {
      stars.push(<i key={i + stars.length} className="far fa-star"></i>);
    }
    return (
      <div className="books__li__stars-container">
        {
          stars.map(star => star)
        }
      </div>
    )
  }

  handleSorting(path) {
    if (path === 'alphabetical') {
      let sortedBooks = [...this.state.books];
      sortedBooks.sort((a, b) => this.sortHelperMethod(a, b, "alphabetical"));
      this.removeGhostLis();
      this.setState({ books: sortedBooks });
      this.handleGhostLis();
    }
    else if (path === 'rating') {
      let sortedBooks = [...this.state.books];
      sortedBooks.sort((a, b) => this.sortHelperMethod(a, b, "rating")).reverse();
      this.removeGhostLis();
      this.setState({ books: sortedBooks });
      this.handleGhostLis();
    }
    else if (path === 'price') {
      let sortedBooks = [...this.state.books];
      sortedBooks.sort((a, b) => this.sortHelperMethod(a, b, "price"));
      this.removeGhostLis();
      this.setState({ books: sortedBooks });
      this.handleGhostLis();
    }
  }

  sortHelperMethod(a, b, type) {
    if (type === "alphabetical") {
      const bookTitleA = a.title[0].toUpperCase();
      const bookTitleB = b.title[0].toUpperCase();

      let comparison = 0;
      if (bookTitleA > bookTitleB) comparison = 1;
      else if (bookTitleA < bookTitleB) comparison = -1;
      return comparison;
    } else if (type === "rating") {
      const bookRatingA = a.rating;
      const bookRatingB = b.rating;

      let comparison = 0;
      if (bookRatingA > bookRatingB) comparison = 1;
      else if (bookRatingA < bookRatingB) comparison = -1;
      return comparison;
    } else if (type === "price") {
      const bookPriceA = parseFloat(a.price);
      const bookPriceB = parseFloat(b.price);

      let comparison = 0;
      if (bookPriceA > bookPriceB) comparison = 1;
      if (bookPriceA < bookPriceB) comparison = -1;
      return comparison;
    }
  }

  render() {
    let location = this.props.location.pathname;
    return (
        <div className="books__outer-container">
          <header className="books__header__title-container">
            <h1>{this.props.title}</h1>

            <div className="books__header__title__sort-container">
              <Link
                data-title-type="alphabetical"
                to={location + "?sort=alphabetical"}
              >
                <p>Alphabetical</p>
              </Link>
              <span>/</span>
              <Link data-title-type="price" to={location + "?sort=price"}>
                <p>Price</p>
              </Link>
              <span>/</span>
              <Link data-title-type="rating" to={location + "?sort=rating"}>
                <p>Rating</p>
              </Link>
            </div>

            <div className="books__header__title__input-container">
              <input
                type="text"
                placeholder="Search all books"
                onChange={this.handleSearch}
              />
              <i className="fas fa-search"></i>
            </div>
          </header>

          {/* Books Below can be moved to another BooksList Component */}
          <ul className="books__ul__list-container">
            {this.state.books.map((book) => {
              return (
                <li
                  key={book.title}
                  onClick={() => this.props.history.push(`/book/${book.title}`)}
                >
                  <LazyLoad height={200} placeholder={<img src={Book} />}>
                    <img src={book.image ? book.image : Book} />
                  </LazyLoad>
                  <p>{book.title}</p>
                  <p>by {book.author}</p>
                  <div className="books__li__info-container">
                    {this.createRatings(book.rating)}
                    <p>${book.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
    );
  }
}

export default Books;
