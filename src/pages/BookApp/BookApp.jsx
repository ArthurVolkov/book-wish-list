import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import { AppHeader } from '../../cmps/AppHeader'
// import { BookList } from '../../cmps/BookList'
import { BookPreview } from '../BookPreview';

import { bookService } from '../../services/bookService'
import { wishListService } from '../../services/wishListService'


export class BookApp extends Component {


  state = {
    books: null,
    wishList: null,
    currBookIdx: 0
  }

  componentDidMount() {
    this.loadBooks()
    this.loadWishList()
  }

  loadWishList() {
    const wishList = wishListService.query();
    this.setState({ wishList })
  }

  async loadBooks() {
    const books = await bookService.getBooks();
    console.log('books:', books)
    this.setState({ books })
  }

  bookToShow = () => {
    const book = this.state.books[this.state.currBookIdx]
    return book
  }


  render() {
    return (
      <Router>
        <div className="main-layout book-app">
          <AppHeader />
          <BookPreview book="bookToShow" />
          {/* <Switch>
            <Route component={ContactApp} path='/contact' />
            <Route component={Home} path='/' />
          </Switch> */}
        </div>
      </Router>

    )
  }
}


