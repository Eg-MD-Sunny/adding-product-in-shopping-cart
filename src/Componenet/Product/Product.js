import React from 'react';
import './Product.css';

const Product = (props) => {
    const {_id, name, price} = props.product

    const addToCart = (_id) =>{
        // console.log('Product Added',_id);
        localStorage.setItem(_id,1);
    }


    return (
        <div className="singleProductStyle">
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={()=>addToCart(_id)}>Add To Cart</button>
        </div>
    );
};

export default Product;