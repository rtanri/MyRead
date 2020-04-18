import React, { Component } from "react";
import * as BooksAPI from './utils/BooksAPI';
import Book from "./Book";


class BookSearch extends Component {
    state= {
        request: '',
        searchResult: []
    }

    updateSearch = (request) => {
        this.setState({request})
        this.updateBookSearch(request)
    }

    updateBookSearch = (request) => {
        // If user type word in search bar, this func look for book that match
        if (search) {
            BooksAPI.search(request).then ((searchResult) => {
                if (searchResult.error) {
                    this.setState({ searchResult: [] })
                } else {
                    this.setState({ searchResult })
                }
            })
        }
    }

}

export default BookSearch;