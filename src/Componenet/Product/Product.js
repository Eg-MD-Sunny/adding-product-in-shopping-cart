import React from 'react';
import './Product.css';

const Product = (props) => {
    const {_id, name, price} = props.product;
// >> Part 01    
    const addToCart = () =>{
        console.log('Product Added')
    }
// << Part 01     
    return (
        <div className="singleProductStyle">
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
{/*>><< Part 01*/}
            <button onClick={addToCart}>Add To Cart</button>            
        </div>
    );
};

export default Product;