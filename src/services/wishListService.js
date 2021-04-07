import { storageService } from './async-storage.service'

export const wishListService = {
  add,
  query,
  remove
}

function query() {
  return storageService.query('wish-list')
}

function remove(wishListId) {
  return storageService.delete('wish-list', wishListId)

}
async function add(wishList) {
  return storageService.post('review', wishList)
}
