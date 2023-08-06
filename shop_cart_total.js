let myCart = [
    {name: 'Shoe', brand: 'Loto', Price: 1200, quantity: 2},
    {name: 'Shirt', brand: 'Loto', Price: 1800, quantity: 6},
    {name: 'Pant', brand: 'Loto', Price: 2500, quantity: 4}
];


function myTotal( product) {
    let sum = 0;
    for(let x = 0; x < product.length; x++){
        let itemPrice = product[x];
        let productsPrice = itemPrice.Price * itemPrice.quantity;
        sum = sum + productsPrice;
    }
    return sum;
}

let result = myTotal(myCart);
console.log(result);








