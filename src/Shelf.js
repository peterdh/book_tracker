import Book from "./Book.js";
import "./App.css";


const Shelf = ({ books, updateBooks, shelfProperty, shelfTitle}) => {

    // need to get "the books on a particular shelf"
    // filter books --> see if they match shelfProperty

    const filteredBooks = books.filter((book) => book.shelf === shelfProperty);
    const bookComponents = filteredBooks.map(book => <Book key={book.id} book={book} updateBooks={updateBooks}/>)

    return (

        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>{bookComponents}</li>
                        </ol>
                    </div>
            </div>
        </div>

    )

}

export default Shelf;