//Object trong JavaScript
var genderKey = 'gender'; 
var myInfor = {
    name: 'Tam Bui',
    age: 22,
    address: 'Hung Yen, Viet Nam',
    [genderKey]: 'female',
    getName: function() {
        return this.name; //this: myInfor
    }
};

//Thêm 1 cặp key: value
//C1:
myInfor.email = 'ngoctam@gmail.com';
//C2:
myInfor['my-univerity'] = 'HUST';

//Lấy value
//C1:
console.log(myInfor.name);
//C2:
console.log(myInfor['address']);

var myKey = 'address';
console.log(myInfor[myKey]);

//Xóa đi vặp key-value
delete myInfor.email;
delete myInfor.age;

console.log(myInfor.getName());

//Cách gọi key:
//Function ---> Phương thức / method
//Others ---> Thuộc tính / property
console.log(myInfor);