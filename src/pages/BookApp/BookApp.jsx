import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import { AppHeader } from '../../cmps/AppHeader'
// import { BookList } from '../../cmps/BookList'
import { BookPreview } from '../../cmps/BookPreview';

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

  async loadWishList() {
    try {
      const wishList = await wishListService.query();
      // console.log('wishList:', wishList)
      this.setState({ wishList })
    } catch (err) {
      console.log('err:', err)
    }
  }

  async loadBooks() {
    try {
      const books = await bookService.getBooks();
      // console.log('books:', books)
      this.setState({ books })
    } catch (err) {
      console.log('err:', err)
    }
  }

  get bookToShow() {
    const book = this.state.books[this.state.currBookIdx]
    return book
  }

  onChangePage(diff) {
    console.log('diff:', diff)
    if (this.state.currBookIdx + diff <= 0) {

    }
    this.setState({ currBookIdx: this.state.currBookIdx + diff })
  }

  render() {
    const { books, currBookIdx } = this.state
    return (
      <Router>
        <div className="main-layout book-app">
          <AppHeader />


          {books && <div className="book-preview-container">
            <BookPreview book={this.bookToShow} />
            {currBookIdx > 0 &&
              <button onClick={() => this.onChangePage(-1)} className="btn-paging first">⬅</button>}
            {currBookIdx < books.length - 1 &&
              <button onClick={() => this.onChangePage(1)} className="btn-paging second">➡</button>}
          </div>}
          {/* <Switch>
            <Route component={ContactApp} path='/contact' />
            <Route component={Home} path='/' />
          </Switch> */}
        </div>
      </Router>

    )
  }
}


