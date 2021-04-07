import { Component } from 'react'
import { bookService } from '../../services/bookService'
import { wishListService } from '../../services/wishListService'

export class Home extends Component {

  state = {
    books: null,
    wishList: null,
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
    this.setState({ books })
  }

  render() {
    const { books, wishList } = this.state
    return (
      <div className="bitcoin-app">
        <h1>Welcome</h1>
        <div>{JSON.stringify(books)}</div>
        <div>{JSON.stringify(wishList)}</div>
      </div>
    )
  }
}
