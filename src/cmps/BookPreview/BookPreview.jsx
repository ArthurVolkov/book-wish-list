<<<<<<< HEAD
import { Component } from 'react'
=======
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
>>>>>>> fc43ebe2c5d3086ddc482316dc8fecb0aae1d490

export class BookPreview extends Component {
    state = {
        isOnWishList: ''
    }
    handleChange = ({target}) => {
        console.log(target.checked)
        if (target.checked) this.props.onAddToWishList(this.props.book)
        else this.props.onRemoverFromWishList(this.props.book)
    }

<<<<<<< HEAD
    render() {
        const { isOnWishList } = this.state
        return (
            <div className="flex flex-col justify-between align-center pointer book-preview">
                <div className="flex justify-between align-center">
                    <h3>{this.props.book.title}</h3>
                    <input type="checkbox" id="wish-list" value={isOnWishList} onChange={this.handleChange} name="wish-list" />
                </div>
                <h4>{this.props.book.author}</h4>
                <p className="descp">{this.props.book.description}</p>
                <div>Rating: </div>
            </div>
        )
    }
}
=======
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
>>>>>>> fc43ebe2c5d3086ddc482316dc8fecb0aae1d490
