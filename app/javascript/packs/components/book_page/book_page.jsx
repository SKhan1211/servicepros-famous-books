import React from "react";
import { Link } from "react-router-dom";

class BookPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      book: { title: '' }
    }
  }

  componentDidMount() {
    this.props.fetchBook(this.props.book)
      .then(bookData => this.setState({ book: bookData.book }))
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
      <div className="books__li__stars-container">{ stars.map(star => star) }</div>
    )
  }

  render() {
    console.log(this.state.book)
    const { book } = this.state;

    return (
      <div className="book_page__outer-container">
        <header>
          <div
            className="book_page__header__back-container"
            onClick={() => this.props.history.goBack()}
          >
            <i className="far fa-arrow-alt-circle-left"></i>
            <span>Back</span>
          </div>
          <div className="book_page__header__text-container">
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
          </div>
        </header>

        <section>
          <div className="book_page__section__image-container">
            <img src={book.image}></img>
          </div>
          <div className="book_page__section__text-container">
            <p>{book.description}</p>
            <div className="book_page__section__info-container">
              <div className="book_page__section__first-info-container">
                <p>
                  <span>Publisher:</span> {book.publisher}
                </p>
                <p>
                  <span>Year:</span> {book.year}
                </p>
                <p>
                  <span>ISBN:</span> {book.isbn}
                </p>
                <p>
                  <span>Category:</span> {book.categories}
                </p>
                <p>${book.price}</p>
                <div className="book_page__section-rating-container">
                  {this.createRatings(book.rating)}
                </div>
              </div>
              <div className="book_page__section-buttons-container">
                <button>
                  <div className="book_page__button-text-container">
                    <span>Buy Now</span>
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </button>
                <button>
                  <div className="book_page__button-text-container">
                    <span>Bookmark</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default BookPage;