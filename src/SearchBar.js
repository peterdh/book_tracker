import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const SearchBar = ({books, updateBooks}) => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {

      setQuery(event.target.value);

      BooksAPI.search(query).then((results) => {

        if (event.target.value === "" || results?.length === 0 || books.error) {
          return setSearchResults([]);
        }

        setSearchResults(results);
        //console.log(searchResults);

      }).catch((error) => {
        console.log("error:", error)
      });
     
      
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
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchResults.length > 0 ? (booksWithCorrectShelves.map((book) => (<Book key={book.id} book={book} updateBooks={updateBooks} />))) : (<h1></h1>)}
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