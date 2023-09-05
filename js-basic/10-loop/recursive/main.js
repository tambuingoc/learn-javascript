//1. Xác định điểm dừng
//2. Logic handle => Tạo ra điểm dừng

function giaiThua(num) {
    if(num > 0) {
        return num * giaiThua(num-1);
    } 
    return 1;
}

console.log(giaiThua(6));