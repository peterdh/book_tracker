import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";


const SearchBar = ({books, updateBooks}) => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async(event) => {
      query = event.target.value;
      setQuery(query);
      if (query === "") {
        setSearchResults([]);
      }
      else {
        const res = await BooksAPI.search(query);
        setSearchResults(res);
      }
      
    }

    return (

        <div className="search-books">
          <div className="search-books-bar">
            <div className="close-search">
              <Link to="/">Close</Link>
            </div>
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
              {searchResults.map((book) => (<Book key={book.id} book={book} updateBooks={updateBooks} />))}
            </ol>
          </div>
        </div>
    );
};

export default SearchBar;