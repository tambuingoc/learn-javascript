var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    }, 
    {
        id: 2,
        name: 'TypeScript',
        coin: 200
    }, 
    {
        id: 3,
        name: 'React',
        coin: 450
    }, 
    {
        id: 4,
        name: 'HTML/CSS',
        coin: 0
    }
];

//Biến tích lũy
//Lưu trữ biến tích lũy

//Reduce
//Declaration function
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(`Reduce using declaration function: ${totalCoin}`);

//Expression function
var totalCoin1 = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log(`Reduce using expression function: ${totalCoin1}`);

//Arrow function (ES6)
var totalCoin2 = courses.reduce((accumulator, currentValue) => accumulator + currentValue.coin, 0);
console.log(`Reduce using arrow function: ${totalCoin2}`);
