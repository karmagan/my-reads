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
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<ListBooks books={this.state.books} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
