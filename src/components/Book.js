import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Book = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return (
        <div className="book">
            <div>{book.author}</div>
            <div>{book.title}</div>
            <button className="delete" onClick={()=>dispatch({type:"REMOVE_BOOK",book:{id:book.id}})}>Delete</button>
        </div>
    )
}
export default Book