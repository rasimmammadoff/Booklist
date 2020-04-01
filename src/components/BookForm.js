import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import uuid from 'react-uuid'

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [author,setAuthor]=useState("");
    const [bookname,setBookname]=useState("");
    function handlesubmit(e)
    {
        e.preventDefault();
        dispatch({type:"ADD_BOOK",book:{title:bookname,author:author,id:uuid()}});
        setAuthor("");
        setBookname("");
    }
    return (
        <div>
           <form className="form" onSubmit={handlesubmit}>
               <div className="text">
               <input className="input-author" type="text" required placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
               <input className="input-book" type="text" required placeholder="Book" value={bookname} onChange={(e)=>setBookname(e.target.value)}/>
               </div>
               <input className="submit" type="submit" value="Add"/>
           </form>
        </div>
    )
}
export default BookForm