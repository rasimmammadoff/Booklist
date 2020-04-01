import React from 'react';
import Nav from './components/Nav'
import Books from './components/Books'
import BookContextProvider from './context/BookContext'
import BookForm from './components/BookForm';
import style from './style.css'

const App = () => {
    return (
        <BookContextProvider>
            <div className="main">
                <Nav />
                <Books />
                <BookForm />
            </div>
        </BookContextProvider>
    )
}
export default App