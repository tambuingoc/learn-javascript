//Vào contructor của array gọi prototype add thêm reduce2 - tự định nghĩa
//Có truyền InitialValue
Array.prototype.reduce2 = function(callback, result) { //result: biến tích trữ
    let i = 0;

    //Nếu không truyền giá trị khởi tạo
    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for(; i < this.length; i++) { //this : Array là method gọi đến reduce2
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((total, number) => total + number, 0); 

//Tự định nghĩa ra reduce method
const result2 = numbers.reduce2((total, number) => total + number, 0);//this là numbers
console.log(result2);