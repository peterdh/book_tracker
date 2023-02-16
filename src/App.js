import "./App.css";
import Shelf from "./Shelf.js";
import SearchBar from "./SearchBar.js";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes, Link } from "react-router-dom";

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    getBooks();
  }, []);
  

  const getBooks = async() => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }

  const updateBooks = (book, shelf) => {

    BooksAPI.update(book, shelf);
    getBooks();

  };


  return (

    <Routes>

      <Route path="/" element= {
        <div>
          <Shelf books={books} updateBooks={updateBooks} shelfProperty={"currentlyReading"} shelfTitle={"Currently Reading"}/>
          <Shelf books={books} updateBooks={updateBooks} shelfProperty={"wantToRead"} shelfTitle={"Want to Read"}/>
          <Shelf books={books} updateBooks={updateBooks} shelfProperty={"read"} shelfTitle={"Read"}/>
          <div className="open-search">
            <Link to="/create"></Link>
          </div>
        </div>
      }>

      </Route>

      <Route path="/search" element={
        <SearchBar />

      }>
        

      </Route>




    </Routes>

    
    
  );
}

export default App;
