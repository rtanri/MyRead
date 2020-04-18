import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Category from './Category';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:[]
  }

  updateAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  componentDidMount() {
    this.updateAllBooks()
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>{
      this.updateAllBooks()
    })
  }


  render() {
    return (


      <div className="app">


        <Route exact path="/" render= />

        <Route path="/create" render= />

      </div>
    )}
}
export default BooksApp;
