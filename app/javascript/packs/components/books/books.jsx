import React from "react";
import { Link } from 'react-router-dom';
import Book from "../../../../assets/images/placeholder_book_cover.gif";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.handleGhostLis = this.handleGhostLis.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      books: this.props.books,
      location: this.props.location.search
    });
    this.handleGhostLis();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.books !== this.state.books) {
      this.handleGhostLis();
    }

    if (prevProps.path !== this.props.path) {
      this.handleSorting(this.props.path.sort);
    }
  }

  handleGhostLis() {
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
      this.removeGhostLis();
      let matches = [];
      this.props.books.forEach(book => {
        if (
          book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          book.author.toLowerCase().includes(event.target.value.toLowerCase())
        ) matches.push(book)
      });
      this.setState({ books: matches });
    } else {
      this.removeGhostLis();
      this.setState({ books: this.props.books });
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
    else {
      
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
    }
  }

  render() {
    return (
      <div className="books__outer-container">
        <header className="books__header__title-container">
          <h1>Bookstore</h1>

          <div className="books__header__title__sort-container">
            <p>Default</p>
            <span>/</span>
            <Link to="/books?sort=alphabetical"><p>Alphabetical</p></Link>
            <span>/</span>
            <Link to="/books?sort=rating"><p>Rating</p></Link>
          </div>

          <div className="books__header__title__input-container">
            <input type="text" placeholder="Search all books" onChange={this.handleSearch}/>
            <i className="fas fa-search"></i>
          </div>
        </header>

        {/* Books Below can be moved to another BooksList Component */}
        <ul className="books__ul__list-container">
          {
            this.state.books.map(book => {
              return (
                <li key={book.title}>
                  <img src={Book} />
                  <p>{book.title}</p>
                  <p>by {book.author}</p>
                  <div className="books__li__info-container">
                    {this.createRatings(book.rating)}
                    <p>${book.price}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>

      </div>
    );
  }
}

export default Books;
