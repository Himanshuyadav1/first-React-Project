import React, { Component } from 'react';

class Product extends Component {

    state = {
        qty: 0
    }

    handleClick = () => {
        this.setState({qty : this.state.qty + 1});
    }

    render() {
        return (
            <div>
                <p>Andriod - $199</p>
                <button onClick={this.handleClick}>Buy</button>
                <h3>QTY: {this.state.qty}(s)</h3>
                <hr />
            </div>
        )
    }
}

export default Product;