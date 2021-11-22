import React from "react";
import Book from "./Book";

function BookShelf(props) {
  const { books, shelfName, changeShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                imageLinks={book.imageLinks}
                changeShelf={(shelf)=>changeShelf(book,shelf)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
