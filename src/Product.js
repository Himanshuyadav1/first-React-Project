import React, { Component } from 'react';

class Product extends Component {

    state = {
        qty: 0

    }

    handleClick = () => {
        this.setState({qty : this.state.qty + 1});
        this.props.cash(this.props.price);
    }

    handleShow = () => this.props.show(this.props.name);

    render() {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.handleClick}>Buy</button>
                <button onClick={this.handleShow}>Show</button>
                <h3>QTY: {this.state.qty}(s)</h3>
                <hr />
            </div>
        )
    }
}

export default Product;