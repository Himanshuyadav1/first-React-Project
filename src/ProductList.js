import React, { Component } from 'react';
import Product from './Product';
import TotalCash from './TotalCash';
import ProductForm from './ProductForm';

class ProductList extends Component{

    state = {
        total: 0,
        productList: [
            {name: "Lenovo", price: 199},
            {name: "HP", price: 399},
            {name: "Dell", price: 259}
        ]
    }

    showProduct = name => alert(`You Selected ${name}`);

    calculateTotal = price => {
        this.setState({ total: this.state.total + price });
    }

    addProduct = product => {
        this.state.productList.push(product);
        this.setState({productList: this.state.productList});
    } 

    render() {        
        return (
            <div>
                <ProductForm newProduct={this.addProduct}/>
                {this.state.productList.map(({name, price}) => 
                    <Product name={name} price={price} show={this.showProduct} cash={this.calculateTotal} />
                                  
                )}
                <TotalCash total={this.state.total} />
            </div>
        )
    }
    
}

export default ProductList;