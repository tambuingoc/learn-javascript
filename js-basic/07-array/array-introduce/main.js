//Ưu tiên sử dụng
var languages = [
    'JavaScript', 
    'React', 
    'Ruby', 
    'Python', 
    null, 
    undefined, 
    function() {

    }, 
    {}
];

var newlanguages = new Array(
    'JavaScript', 
    'React', 
    'Ruby', 
    'Python', 
    null, 
    undefined, 
    function() {

    }, 
    {}
);

console.log(typeof languages); //object
console.log(typeof newlanguages); //object

//Kiểm tra 1 biến có phải array không
console.log(Array.isArray(languages));

//Truy xuất mảng
console.log(languages.length);

//Lấy phần tử theo index
console.log(languages[1]);