import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products,setProducts] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h3>Welcome to my Shop</h3>
            <div className="gridStyle">
                {
                    products.map(product=><Product
                                            key={product._id}
                                            product={product}
                                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;