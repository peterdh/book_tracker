import "./App.css";
import PropTypes from "prop-types";

const Book = ({ book, updateBooks }) => {

    return (

      <li>          
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks.thumbnail}")`}}
            ></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => {updateBooks(book, event.target.value);}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
            </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
            </div>
      </li>
                


    );


}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBooks: PropTypes.func.isRequired,
}

export default Book;