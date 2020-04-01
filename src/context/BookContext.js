import React, {useReducer, createContext} from 'react';
import { BookReducer } from '../reducer/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,dispatch] = useReducer(BookReducer,[
        {title:"Ben Neyim",author:"Hakan Menguc",id:1},
        {title:"Power of discipline",author:"Brian Tracy",id:2},
        {title:"Tongue Fu",author:"Sam Horn",id:3}
    ])

    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children }
        </BookContext.Provider>
    )
}
export default BookContextProvider;
