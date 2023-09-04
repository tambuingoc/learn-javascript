Làm việc với Array
keyword: JavaScript array method
1. To string: Chuyển kiểu dữ liệu array về kiểu string
2. Join: thay đổi ngăn cách giữa các phần tử trong mảng
3. Pop: xóa đi phần tủ cuối mảng và trả về danh sách phần tử đã xóa
- Nếu mảng rỗng trả về undefined
4. Push: thêm 1 hoặc nhiều phần tử vào cuối mảng + trả về độ dài mới của bảng
5. Shift: xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa
- Nếu mảng rỗng trả về undefined
6. Unshift: thêm 1 hoặc vài phần tử mới vào đầu mảng và trả về độ dài của mảng
7. Splicing: xóa, cắt, chèn phần tử mới vào mảng
- splice(start: number, deleteCount?: number, insert_item)
- tại vị trí start xóa deleCount phần tử và chèn vào phần tử insert_item
8. Concat: hợp nhất các array
- origin_array.concat(array2)
9. Slicing: cắt 1 vài hoặc toàn bộ element củ mảng
- origin_array.slice(start: number, ennd: number)
- Copy 1 mảng
origin_array.slice(0)
