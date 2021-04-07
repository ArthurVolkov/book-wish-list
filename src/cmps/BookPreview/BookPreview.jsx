import { Link } from 'react-router-dom'


export function BookPreview({ book }) {
    return (
        <Link to={'/book/' + book._id}>
            <div className="flex flex-col justify-center align-center pointer book-preview">
                <div className="img-container">
                    <img src={`https://robohash.org/${book._id}`} alt="" />
                </div>
                <p>{book.name}</p>
            </div>
        </Link>
    )
}
