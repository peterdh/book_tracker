import "./App.css";
import Shelf from "./Shelf.js";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    
    getBooks();
  }, []);

  const updateBooks = (book, shelf) => {

    BooksAPI.update(book, shelf);

  };


  return (

    <div>
      <Shelf books={books} updateBooks={updateBooks} shelfProperty={"currentlyReading"} shelfTitle={"Currently Reading"}></Shelf>
      <Shelf books={books} updateBooks={updateBooks} shelfProperty={"wantToRead"} shelfTitle={"Want to Read"}></Shelf>
      <Shelf books={books} updateBooks={updateBooks} shelfProperty={"read"} shelfTitle={"Read"}></Shelf>
    </div>
    
  );
}

export default App;
