const addToCartDB = _id =>{
   
    const quantity = localStorage.getItem(_id)
    // console.log(quantity);
    if(quantity){
        console.log('Already Exists')
        const newQunatity = parseInt(quantity) + 1;
        localStorage.setItem(_id,newQunatity);
    }else{
        console.log('New Item Added')
        localStorage.setItem(_id,1)
    }
}

export { addToCartDB };

