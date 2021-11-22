import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "./BookShelf";

class Search extends React.Component {
  state = {
    query: "",
    filteredBooks: [],
  };
  updateInput = (e) => {
    const value = e.target.value.replace(/\s+/g, " ").trim();
    this.setState({ query: e.target.value });

    // only search if the query value is not empty.
    value
      ? BooksAPI.search(value).then((filteredBooks) =>
          this.state.query
            ? this.setState({ filteredBooks })
            : this.setState({ filteredBooks: [] })
        )
      : this.setState({ filteredBooks: [] });
  };

  render() {
    const { query, filteredBooks } = this.state;
    const { shelfBooks, changeShelf } = this.props;
    let books = [];
    filteredBooks.error ||
      (books = filteredBooks.map(
        (fb) => shelfBooks.filter((sb) => sb.id === fb.id)[0] || fb
      ));
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              onChange={this.updateInput}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            shelfName="Searched Books"
            books={books}
            changeShelf={changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default Search;
