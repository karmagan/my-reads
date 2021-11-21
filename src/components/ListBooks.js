import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

function ListBooks(props) {
  const { books, changeShelf } = props;
  const shelves = [
    { name: "currentlyReading", text: "Currently Reading" },
    { name: "wantToRead", text: "Want to Read" },
    { name: "read", text: "Read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf)=>
          <BookShelf
            key={shelf.name}
            shelfName={shelf.text}
            books={books.filter((book) => book.shelf === shelf.name)}
            changeShelf={changeShelf}
          />)}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}

export default ListBooks;
