//Toán tử 3 ngôi
var couse = {
    name: 'JavaScript',
    coin: 200
};

// if(couse.coin > 0) {
//     console.log(`${couse.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }
var result = couse.coin > 0 ? `${couse.coin} Coins` : 'Miễn phí';
console.log(result);
