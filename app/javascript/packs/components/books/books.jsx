import React from "react";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    // fetch("https://servicepros-test-api.herokuapp.com/api/v1/books")
    //   .then(res => res.json())
    //   .then(books => this.setState({ books }))
    //   .catch(error => console.log("Error while fetching books."))
  }

  render() {
    console.log(this.state.books);
    return <div>This is the books page.</div>;
  }
}

export default Books;
