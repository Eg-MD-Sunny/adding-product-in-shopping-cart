import React from 'react';
import { storageBD } from '../Utilities/LocalDB';
import './Product.css';

const Product = (props) => {
    const {_id, name, price} = props.product;
// >> Part 01    
    const addToCart = (_id) =>{
        storageBD(_id);
    }

// << Part 01     
    return (
        <div className="singleProductStyle">
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
{/*>><< Part 01*/}
            <button onClick={()=>addToCart(_id)}>Add To Cart</button>            
        </div>
    );
};

export default Product;