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
                                                    bookID={book.id}
                                                    image={book.backgroundImage}
                                                    title={book.title}
                                                    author={book.author}
                                                    currentShelf={book.shelf}
                                                    updateShelf={this.props.updateShelf}
                                                />
                                            </li>)}
                                </ol>
                            </div>    
                        </div>


                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want To Be Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {this.props.books
                                        .filter(book => book.shelf === "wantToRead")
                                        .map((book) =>
                                            <li key={book.id}>
                                                <Book 
                                                    bookID={book.id}
                                                    image={book.backgroundImage}
                                                    title={book.title}
                                                    author={book.author}
                                                    currentShelf={book.shelf}
                                                    updateShelf={this.props.updateShelf}
                                                />
                                            </li>)}
                                </ol>
                            </div>    
                        </div>            


                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Finished Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {this.props.books
                                        .filter(book => book.shelf === "finishedRead")
                                        .map((book) =>
                                            <li key={book.id}>
                                                <Book 
                                                    bookID={book.id}
                                                    image={book.backgroundImage}
                                                    title={book.title}
                                                    author={book.author}
                                                    currentShelf={book.shelf}
                                                    updateShelf={this.props.updateShelf}
                                                />
                                            </li>)}
                                </ol>
                            </div>    
                        </div>            


                    </div>
                </div>

                <div className="open-search">
                    <Link 
                        to="/create">
                        Add a book 
                    </Link>
                </div>

            </div> 


        );
    }
}
