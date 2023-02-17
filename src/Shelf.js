import Book from "./Book.js";
import "./App.css";
import PropTypes from "prop-types";



const Shelf = ({ books, updateBooks, shelfProperty, shelfTitle}) => {

    // need to get "the books on a particular shelf"
    // filter books --> see if they match shelfProperty

    const filteredBooks = books.filter((book) => book.shelf === shelfProperty);

    return (

        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {filteredBooks.map((book) => (<Book key={book.id} book={book} updateBooks={updateBooks}/>))}
                        </ol>
                    </div>
            </div>
        </div>

    )

}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    shelfProperty: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
}

export default Shelf;