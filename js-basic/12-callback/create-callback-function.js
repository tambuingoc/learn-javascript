//1. Là hàm
//2. Được truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)
function myFunction(param) {
    if(typeof param === 'function') {
        param('Tự học lập trình JavaScript');
    }
}

function myCallBack(value) {
    console.log('Value: ', value);
}

myFunction(myCallBack); //Call Back