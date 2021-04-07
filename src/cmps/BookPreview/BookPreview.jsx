

export function BookPreview({ book }) {
    console.log('book:', book)

    return (
        <div className="flex flex-col justify-between align-center pointer book-preview">
            <div className="flex justify-between align-center">
                <h3>{book.title}</h3>
                <input type="checkbox" />
            </div>
            <h4>{book.author}</h4>
            <p className="descp">{book.description}</p>
            <div>Rating: </div>
        </div>
    )
}
