LÀM VIỆC VỚI CHUỖI
Keyword: JavaScript String method
1. Length: Tìm chiều dài của chuỗi (length)
2. Find index: Tìm vị trí một chuỗi con trong 1 chuỗi lớn (indexOf('chuoi', start_search), search(''))
    - Đánh index cho tất cả các ký tự bắt đầu từ 0
    - Nếu tồn tại trả về vị trí của chuỗi con đầu tiên xuất hiện thỏa mãn
    - Nếu không tồn tại trả vè -1

3. Cut String: slice(start, end)

4. Replace: ghi đè 
    - replace(search, replace) thay thế vị trí tìm thấy đầu tiên
    - Muốn thay thế toàn bộ chuỗi tìm được thì sử dụng biểu thức chính quy \chuỗi\g

5. Convert to upper case, lower case

6. Trim: Loại bỏ ký tự khoảng trắng thừa ở hai đầu

7. Split: Quy đổi danh sách dạng String sang Array cần tìm được điểm chung giữa các chuỗi con

8. Get a character by index
- chartAt(index) ---> kí tự tương ứng
- Nếu index không hợp lệ thì nó sẽ trả về 1 chuỗi rỗng nếu sử dụng chartAt
- Trả về undefined nếu sử dụng [index]