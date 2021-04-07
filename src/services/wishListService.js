import { storageService } from './async-storage.service'

export const wishListService = {
  add,
  query,
  remove
}

function query(sortBy = null) {
  const books = storageService.query('wish-list')
  return books
}

function remove(wishListId) {
  return storageService.delete('wish-list', wishListId)

}
async function add(wishList) {
  return storageService.post('review', wishList)
}
