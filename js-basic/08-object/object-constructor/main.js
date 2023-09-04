//Object constructor: Hàm tạo - là mô tả bản thiết kế của đối tượng
//Declaration function
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`; 
    }
}

// Expression Function
// var User = function (firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`; 
//     }
// }

var author = new User('Tâm', 'Bùi', 'Avatar'); //Object
var user = new User('Vũ', 'Nguyễn', 'Avatar');

author.title = 'Chia sẻ tài liệu';
user.comment = 'Liệu có khóa học asp.net không ạ';

console.log(author.getName()); //this : author
console.log(user.getName()); //this: user