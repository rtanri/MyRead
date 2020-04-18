import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Category extends Component {
    render() {
        return(
            <div className="list-books">

                <div className="list-books-title">
                     <h1>My Reading Library</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {this.props.books
                                        .filter(book => book.shelf === "currentlyReading")
                                        .map((book) =>
                                            <li key={book.id}>
                                                <Book 
                                                    
                                                
                                                />

                                            </li>
                                        )
                                        }
                    </div>
                </div>
            </div> 


        );
    }
}
