import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Book from './Book';

const Books = () => {
    const { books } = useContext(BookContext);
    return books.length ?
        (
            <div className="books">
            {books.map(book => {
                return (
                    <Book key={book.id} book={book} />
                )
            })}
            </div>
        ) :
        (
            <div className="no-books">No Books Found</div>
        )

}
export default Books