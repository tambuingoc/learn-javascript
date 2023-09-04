//Object prototype 
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

//Thêm một thuộc tính mới bởi prototype
User.prototype.course = 'JavaScript Basic';
User.prototype.getCourse = function() {
    return this.course;  //this là đối tượng gọi đến getCourse
}

var user1 = new User('Tâm', 'Bùi', 'Avatar1');
var user2 = new User('Thảo', 'Bùi', 'Avatar2');

console.log(user1.course);
console.log(user2.getCourse()); //this = user2