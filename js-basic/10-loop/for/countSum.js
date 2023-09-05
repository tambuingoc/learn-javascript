/*
Tính tổng giá trị đơn hàng
Cập nhật tháng 6 năm 2022

Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
*/

var orders = [
    {
        name: 'JavaScript',
        price: 100
    }, 
    {
        name: 'Ruby',
        price: 150
    }
];

function getTotal(arr) {
    var sum = 0;
    var arrLength = arr.length;
    for(var i = 0; i < arrLength; i++) {
        sum += arr[i].price;
    }
    return sum;
}

console.log(getTotal(orders));