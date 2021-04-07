import { storageService } from './async-storage.service'

export const wishListService = {
  add,
  query,
  get,
  remove
}

function query(filterBy = null) {
  const books = storageService.query('wish-list')
  return books
}

function get(bookName) {
  const book = storageService.get('wish-list',bookName)
  return book
}

function remove(bookName) {
  return storageService.remove('wish-list', bookName)

}
async function add(book) {
  return storageService.post('wish-list', book)
}
