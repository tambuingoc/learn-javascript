var date = 9;

switch(date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3: //===3
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
    case 6:
    case 7:
        console.log('Hôm nay là thứ 5, 6, 7');
        break;
    default:
        console.log('Không biết');
}

// So sánh tính đúng, sai >, <, = -----> if-else (< 3 case)
//Biết trước giá trị ----> switch case (>= 3 case)