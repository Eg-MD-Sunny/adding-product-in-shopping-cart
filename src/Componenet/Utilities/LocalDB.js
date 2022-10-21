const storageBD = _id =>{
    let shoppingCart = {};
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

