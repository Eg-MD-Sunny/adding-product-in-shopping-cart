import React from 'react';

const Product = (props) => {
    const {_id, name, price} = props.product
    return (
        <div >
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;