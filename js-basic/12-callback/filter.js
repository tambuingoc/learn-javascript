//Filter
//Trả về 1 mảng mới chứa các element thỏa mãn điều kiện

//Định nghĩa filter
//Không quan tâm đến phần tử không tồn tại ----. FOR-IN cần check xem index có thuộc method gần nhất không sử dụng hasOwnPrototy
Array.prototype.filter2 = function(callback) {
    var newArray = [];
    for(var index in this) {
        if(this.hasOwnPrototy(index)) {
            var result = callback(this[index], index, this);
            //Nếu phần tử thỏa mãn điều kiện thì push vào mảng mới
            newArray.push(result);
        }
    }
    return newArray;
}
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'ReactJS',
        coin: 200
    },
    {
        id: 4,
        name: 'NodeJS',
        coin: 400
    }
];

// var fillFreeCoin = courses.filter(function(course, index, array) {
//     return course.coin === 0;
// })
// console.log(fillFreeCoin);
var fillFreeCoin = courses.filter2(function(course) {
    return course.coin === 0;
});

console.log(fillFreeCoin);