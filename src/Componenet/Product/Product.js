import React from 'react';
import './Product.css';

const Product = (props) => {
    const {_id, name, price} = props.product;
    const addToCart = () =>{
        console.log('Product Added')
    }
    return (
        <div className="singleProductStyle">
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    );
};

export default Product;