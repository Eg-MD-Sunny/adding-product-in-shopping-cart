const addToCartDB = _id =>{
    localStorage.setItem(_id,1)
    const quantity = localStorage.getItem(_id)
    console.log(quantity);
}

export { addToCartDB };

