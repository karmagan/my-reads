import React from "react";

function Book(props) {
  const { title, authors, shelf, imageLinks, changeShelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              // Check if imagelink exists as some of the books did not have imagelinks
              imageLinks ? imageLinks.thumbnail : ""
            })`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf ? shelf : "none"} //if the book is not assigned to a shelf show 'none'
            onChange={(e) => changeShelf(e.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      {/* Check if title or author exists, otherwise show an message */}
      <div className="book-title">{title ? title : "[ No title ]"}</div>
      <div className="book-authors">{authors ? authors : "[ No authors ]"}</div>
    </div>
  );
}

export default Book;
