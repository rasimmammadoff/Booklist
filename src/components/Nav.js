import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Nav = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="nav">
            <h2>Book List | You have {books.length? books.length:"no"} books</h2>
        </div>
    )
}
export default Nav