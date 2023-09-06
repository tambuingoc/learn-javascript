Array.prototype.map2 = function(callback) {
    //Lặp qua tất cả phần tử arr
    var arrLength = this.length; 
    for(var i = 0; i < arrLength; i++) {
        callback(this[i], i); //mỗi lần lặp qua thì gọi lại callback để nhận lại elem, index
    }

};
var courses = [
    'Java',
    'JavaScript',
    'NodeJS',
    'ReacrJS'
];

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// })

// console.log(htmls.join(''));
courses.map2(function(course) { //this : map2, function là callback
    console.log(i, course);
});