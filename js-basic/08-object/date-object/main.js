var date = new Date(); //object

var year = date.getFullYear();
var month = date.getMonth() + 1; //0-11
var day = date.getDay();

console.log(`${day}/${month}/${year}`);