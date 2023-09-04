//Khai báo
var num = 10;
var newNum = new Number(3.14);
var million = 1e6;
var PI = 3.14

var result = 20 / 'ABC';
console.log(result); //NaN
console.log(typeof result); //Number
//Check NaN
console.log(isNaN(result)); //true

console.log(typeof num); //Number
console.log(typeof newNum); //Object

// //Phương thức
console.log(typeof num.toString()); //string

console.log(typeof PI.toFixed(1)); //string