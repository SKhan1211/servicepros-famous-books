import React from "react";
import Book from "../../../../assets/images/placeholder_book_cover.gif";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("https://servicepros-test-api.herokuapp.com/api/v1/books")
      .then(res => res.json())
      .then(books => this.setState({ books }))
      .catch(error => console.log("Error while fetching books."))
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="books__outer-container">
        <header className="books__header__title-container">
          <h1>Bookstore</h1>
          <div className="books__header__title__input-container">
            <input type="text" placeholder="Search all books" />
            <i className="fas fa-search"></i>
          </div>
        </header>

        {/* Books Below can be moved to another BooksList Component */}
        <ul className="books__ul__list-container">
          {
            this.state.books.slice(0, 5).map(book => {
              return (
                <li key={book.isbn}>
                  <img src={Book} />
                  <p>{book.title}</p>
                  <p>by {book.author}</p>
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
