import React from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      });
    });
  };
  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <ListBooks
                books={this.state.books}
                changeShelf={this.changeShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search 
                shelfBooks={this.state.books} 
                changeShelf={this.changeShelf} 
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
