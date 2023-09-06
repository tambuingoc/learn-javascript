//Includes method tồn tại trong Array, String
//Kiểm tra xem 1 chuỗi có tồn tại trong 1 chuỗi, 1 phần tử có tồn tại trong 1 mảng không?
//nếu tồn tại ---> return true, không tồn tại return false
var myString = 'Tự học JavaScript';
console.log(myString.includes('JavaScript')); //true


var courses = [
    'NodeJS',
    'JavaScript',
    'ReactJS',
    'TypeScript'
];
console.log(courses.includes('ReactJS')); //true
console.log(courses.includes('NodeJS', 1)); //vị trí bắt đầu tìm kiếm là phần tử T1---> false
//-4 + 4
console.log(courses.includes('NodeJS', -4));//true
//-2+4
console.log(courses.includes('TypeScript', -2));//true
