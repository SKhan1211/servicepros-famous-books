import React from "react";
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
    this.setState({ books: this.props.books })
    this.handleGhostLis();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.books !== this.state.books) {
      this.handleGhostLis();
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

  handleSearch() {
    if (event.target.value) {
      let hiddenLis = document.getElementsByClassName("books__ul__list__li-hidden");
      while (hiddenLis.length > 0) hiddenLis[0].parentNode.removeChild(hiddenLis[0]);
      let matches = [];
      this.props.books.forEach(book => {
        if (
          book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          book.author.toLowerCase().includes(event.target.value.toLowerCase())
        ) matches.push(book)
      });
      this.setState({ books: matches });
    } else {
      let hiddenLis = document.getElementsByClassName("books__ul__list__li-hidden");
      while (hiddenLis.length > 0) hiddenLis[0].parentNode.removeChild(hiddenLis[0]);
      this.setState({ books: this.props.books });
    }
  }

  createRatings(num) {
    // Algorithm to turn rating into Font Awesome icons
    let stars = [];
    let filledStar = <i className="fas fa-star"></i>;
    let unfilledStar = <i className="far fa-star"></i>;
    let numOfUnfilled = 5 - num;

    for (let i = 0; i < num; i++) {
      stars.push(filledStar);
    };

    for (let i = 0; i < numOfUnfilled; i++) {
      stars.push(unfilledStar);
    }
    return (
      <div className="books__li__stars-container">
        {
          stars.map(star => star)
        }
      </div>
    )
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="books__outer-container">
        <header className="books__header__title-container">
          <h1>Bookstore</h1>
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
                    <p>{this.createRatings(book.rating)}</p>
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
