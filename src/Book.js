import "./App.css";
import { useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI";

const Book = ({ book, updateBooks }) => {

    const [shelf, setShelf] = useState('');

    useEffect(() => {
        // need some kind of function that updates the database w/value of changed shelf
      
        updateBooks(book, shelf);

    }, [shelf, book, updateBooks]);


    return (


        
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: book.imageURL,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select value={shelf} onChange={e => setShelf(e.target.value)}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                      </div>
                    </li>
                


    );


}

export default Book;