import React from "react";
import Book from "../../../../assets/images/placeholder_book_cover.gif";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.handleGhostLis = this.handleGhostLis.bind(this);
  }

  componentDidMount() {
    fetch("https://servicepros-test-api.herokuapp.com/api/v1/books")
      .then(res => res.json())
      .then(books => this.setState({ books }))
      .then(() => this.handleGhostLis())
      .catch(error => console.log("Error while fetching books."))    
  }

  handleGhostLis() {
    let lis = Array.from(document.getElementsByClassName("books__ul__list-container")[0].children);
    if (lis.length % 4 !== 0) {
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
    }
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
            this.state.books.map(book => {
              return (
                <li key={book.title}>
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
