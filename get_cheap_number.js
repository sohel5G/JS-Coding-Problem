let mobiles = [
    { brand: 'Samsung', Price: 20000, color: 'black', ram: '6gb' },
    { brand: 'Walton', Price: 15000, color: 'Blue', ram: '3gb' },
    { brand: 'Symphony', Price: 60000, color: 'black', ram: '5gb' },
    { brand: 'iPhone', Price: 50000, color: 'gray', ram: '2gb' }
];

function getHighPrice(GiveAnArray) {
    let hightMobilePrice = GiveAnArray[0];

    for (let x = 0; x < GiveAnArray.length; x++) {
        let mobile = GiveAnArray[x];
        if (mobile.Price > hightMobilePrice) {
            hightMobilePrice = mobile.Price;
        }
    }
    return hightMobilePrice;
}
let result = getHighPrice( mobiles );
console.log(result);







