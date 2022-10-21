    const storageBD = _id =>{
    let shoppingCart = {};
    
    //Get the shoppingCart    
    const storedCart = localStorage.getItem("Shopping-Cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }


    //Add Quantity
    const quantity = shoppingCart[_id];
    if(quantity>0){
        const newQuantity = quantity +1;
        shoppingCart[_id] = newQuantity;
    }else{
        shoppingCart[_id] = 1;
    }
    localStorage.setItem("Shopping-Cart",JSON.stringify(shoppingCart));
    // localStorage.setItem(_id,1)
    // const quantity = localStorage.getItem(_id)
    // if(quantity>0){
    //     console.log("This Product Already Exists");
    //     const newQuenty = parseInt(quantity) + 1;
    //     localStorage.setItem(_id,newQuenty)

    // }else{
    //     console.log('New Product Added');
    //     localStorage.setItem(_id,1);
    // }
}

export { storageBD };

