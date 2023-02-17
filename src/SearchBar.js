import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const SearchBar = ({books, updateBooks}) => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async(event) => {

      setQuery(event.target.value);
      if (query === "") {
        setSearchResults([]);
      }
      else {
        const res = await BooksAPI.search(query);
        setSearchResults(res);
      }
      
    }

    const booksWithCorrectShelves = searchResults.map((searchBook) => {
      
      const bookFound = books.find((book) => book.id === searchBook.id);
      if (bookFound) {
        searchBook.shelf = bookFound.shelf;
      } else {
        searchBook.shelf = 'none';
      }
        return searchBook;
    });

    console.log(booksWithCorrectShelves);


    return (

        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className='close-search'>
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => handleSearch(event)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {booksWithCorrectShelves.map((book) => (<Book key={book.id} book={book} updateBooks={updateBooks} />))}
            </ol>
          </div>
        </div>
    );
};

SearchBar.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
}


export default SearchBar;