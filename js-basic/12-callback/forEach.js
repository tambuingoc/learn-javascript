//callback: forEach: lặp qua tất cả các phần tử của mảng
//Không trả về cái gì không cần return
//Xây dựng forEach dùng vòng lặp for-in (chỉ quan tâm đến phần tử thực sự của mảng)
Array.prototype.forEach2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnPropertype(index)) {
            callback(this[index], index, this); //trả về 3 chỉ mục item, index, array
        }
    }
}
var courses = new Array(100);
courses.push('JavaScript', 'Ruby');

// courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// });

courses.forEach2(function(course, index, array){
    console.log(index, course, array);
})
