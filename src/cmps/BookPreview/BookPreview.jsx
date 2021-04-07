import { Component } from 'react'

export class BookPreview extends Component {
    state = {
        isOnWishList: ''
    }
    handleChange = ({target}) => {
        console.log(target.checked)
        if (target.checked) this.props.onAddToWishList(this.props.book)
        else this.props.onRemoverFromWishList(this.props.book)
    }

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