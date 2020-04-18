import React, { Component } from "react";
import * as BooksAPI from './utils/BooksAPI';
import Book from "./Book";


class BookSearch extends Component {
    state= {
        request: '',
        searchResults: []
    }

    updateSearch = (request) => {
        this.setState({request})
        this.updateBookSearch(request)
    }

    updateBookSearch = (request) => {
        // If user type word in search bar, this func look for book that match
        if (search) {
            BooksAPI.search(request).then ((searchResult) => {
                if (searchResults.error) {
                    this.setState({ searchResults: [] })
                } else {
                    this.setState({ searchResults })
                }
            })
            // if there is no query, then show on result
        } else {
            this.setState({ searchResults: [] })
        }
    }
  
    render(){
        //asssign searched books to the "none" shelf unless they are already on the shelf, then display correct shelf
        this.state.searchResults.map((searchResult) =>{
            searchResult.shelf ="none"
            this.props.books.map((book) => {
                searchResult.id === book.id ? searchResult.shelf=book.shelf : ''}
            )})

        return(

            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>  
              <div className="search-books-input-wrapper">

                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.request}
                    onChange={(event) => this.updateSearch(event.target.value)}
                    />
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchResults
                    .map((searchResult)=>
                    <li key={searchResult.id}>
                        <Book 
                            bookID ={searchResult.id}
                            image ={searchResult.imageLinks}
                            title ={searchResult.title}
                            authors={searchResult.authors}
                            updateShelf={this.props.updateShelf}
                            currentShelf={searchResult.shelf}
                        />
                    </li>
                    )
                }
              </ol>
            </div>
          </div>

        )
    }
}

export default BookSearch;