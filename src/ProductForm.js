import React from 'react';

const ProductForm = () => {
    const handleForm = e => {
        e.preventDefault();
        console.log(e);
        console.log(e.target);
    }
    return (
        <form>
            Product: <input type="text" placeholder="Product Name" name="name" />
            <br />
            <br />
            Price: <input type="number" placeholder="Product Price" name="price" />
            <br />
            <br />
            <button onClick={handleForm}>Submit</button>
        </form>
    )
}

export default ProductForm;