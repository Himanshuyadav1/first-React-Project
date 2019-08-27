import React, { Component } from 'react';

class ProductForm extends Component{
    state = {
        name: '',
        price: 0
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleForm = e => {
        e.preventDefault();
        alert(`Product Name: ${this.state.name} - Price: $${this.state.price}`);
        // console.log(`Product Name: ${this.state.name} - Price: $${this.state.price}`);
        // console.log(e.target.getElementsByTagName("input")[0].value);
        e.target.getElementsByTagName("input")[0].value = "";
        e.target.getElementsByTagName("input")[1].value = "";
        // console.log(this.props.product);
        this.props.newProduct({name: this.state.name, price: parseInt(this.state.price)}); 
    }

    render() {
        return (
            <form onSubmit={this.handleForm}>
                Product: <input type="text" placeholder="Product Name" name="name" onChange={this.handleChange} />
                <br />
                <br />
                Price: <input type="number" placeholder="Product Price" name="price" onChange={this.handleChange} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }    
}

export default ProductForm;