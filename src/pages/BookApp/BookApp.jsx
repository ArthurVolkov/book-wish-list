import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import { AppHeader } from '../../cmps/AppHeader'
import { BookPreview } from '../../cmps/BookPreview';

import { bookService } from '../../services/bookService'
import { wishListService } from '../../services/wishListService'


export class BookApp extends Component {


  state = {
    books: null,
    wishList: null,
    currBookIdx: 0,
    filterBy: null
  }

  componentDidMount() {
    this.loadBooks()
    this.loadWishList()
  }

  async loadWishList() {
    try {
      const wishList = await wishListService.query(this.state.filterBy);
      console.log('wishList:', wishList)
      this.setState({ wishList })
    } catch (err) {
      console.log('err:', err)
    }
  }

  async loadBooks() {
    try {
      const books = await bookService.getBooks();
      console.log('books:', books)
      this.setState({ books })
    } catch (err) {
      console.log('err:', err)
    }
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


