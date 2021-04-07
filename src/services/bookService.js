import axios from 'axios'

export const bookService = {
    getBooks,
}

async function getBooks() {
    var books = JSON.parse(localStorage.getItem('books')) 
    if (!books) {
        const { data } = await axios.get(`http://s3.amazonaws.com/sundaysky-mock/books/listOfBooks.json`)
        localStorage.setItem('books', JSON.stringify(data))
    } return data

}

