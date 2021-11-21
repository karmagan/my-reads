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

    //   this.state.books.filter((b)=>b.id === book.id).length  === 0
    //     ? BooksAPI.get(book.id).then((b)=>{
    //       b.shelf = shelf
    //       this.setState((s)=>({books:[...s.books,b]}))})
    //   : this.setState((s)=>s.books.filter((b)=>b.id === book.id))
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
              <Search books={this.state.books} changeShelf={this.changeShelf} />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
