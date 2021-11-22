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
    const value = e.target.value;
    this.setState({ query: e.target.value });

    if (value !== "") {
      BooksAPI.search(value).then((filteredBooks) =>
        this.setState({ filteredBooks })
      );
    }
  };

  render() {
    const { query, filteredBooks } = this.state;
    const { shelfBooks, changeShelf } = this.props;
    const books = filteredBooks.map(
      (fb) => shelfBooks.filter((sb) => sb.id === fb.id)[0] || fb
    );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
