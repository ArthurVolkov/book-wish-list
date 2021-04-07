import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";


export function BookPreview({ book }) {
    console.log('book:', book)

    return (
        <div className="flex flex-col justify-between align-center book-preview">
            <div className="flex justify-between align-center">
                <h3>{book.title}</h3>
                <input type="checkbox" />
            </div>
            <h4>{book.author}</h4>
            <p className="descp">{book.description}</p>
            <div className="flex align-center rate-container">Rating: 
            <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={+book.rating}
                    activeColor="#ffd700"
                />
            </div>
            <h5>Price: {book.price}</h5>
        </div>
    )
}
