const storageBD = _id =>{
    // localStorage.setItem(_id,1)

    const quantity = localStorage.getItem(_id)
    if(quantity>0){
        console.log("This Product Already Exists");
    }else{
        console.log('New Product Added');
        localStorage.setItem(_id,1);
    }
}

export { storageBD };

