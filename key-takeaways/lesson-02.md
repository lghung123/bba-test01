# Version control system
- VCS (Version Control System): Hệ thống quản lý các phiên bản.
- VCS gồm 3 loại: 
    1. Local: lưu ở máy cá nhân.
    2. Centralize: lưu ở một máy chủ tập trung.
    3. Distributed: lưu ở nhiều máy khác nhau.

# Git
## Git là gì? Tại sao phải dùng git?
- Git là 1 VCS dạng distributed.
- Dùng git do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau.
- So sánh Git với các VCS khác:
    - Về tính năng: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh.
    - Về chi phí: Free.
    - Về độ phổ biến: nhiều công ty sử dụng.

## Git và GitHub khác nhau như thế nào?
### Git
- Là một phần mềm.
- Được cài trên máy tính cá nhân.
- Là một commandline tool.
- Là công cụ quản lý phiên bản, đưa file vào Git repository.
- Có các tính năng của Version Control System.

### GitHub
- Là một dịch vụ web.
- Host trên website.
- Là công cụ có giao diện.
- Là nơi để upload Git repository lên.
- Có các tính năng của Version Control System và một số tính năng khác.

## Các keyword và chuyển đổi trạng thái của file
### Các trạng thái
- Working Directory: Các file mới hoặc file có thay đổi.
- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản).
- Repository: Các commit (phiên bản).

### Các keyword và chuyển đổi trạng thái của file
#### Câu lệnh khởi tạo
- Để khởi tạo thư mục được quản lý bởi Git dùng lệnh: *git init*

#### Câu lệnh cấu hình
- Để cấu hình git dùng các lệnh sau:
    - Trường hợp muốn cấu hình cho 1 repo (user đứng tại repo đó):    
        - *git config user.name "<user_name>"* (dùng dể cấu hình name).
        - *git config user.email "email"* (dùng dể cấu hình email).
    - Trường hợp muốn cho toàn bộ máy tính (default):    
        - *git config --global user.name "<user_name>"* (dùng dể cấu hình name).
        - *git config --global user.email "email"* (dùng dể cấu hình email).

#### Câu lệnh thêm file vào vùng staging
- Để thêm 1 file: *git add <file_name>*
- Để thêm toàn bộ: *git add .*

#### Câu lệnh xem trạng thái file
- Để xem trạng thái của file: *git status*
    - File màu xanh: vùng staging.
    - File màu đỏ: vùng working directory.

#### Câu lệnh commit file
- Để commit file: *git commit -m"message"*
    - Sau khi commit có thể kiểm tra lại các file đã commit bằng lệnh: *git log*
    - Về quy ước của message commit:
        1. Commit message cần rõ ràng, chuyên nghiệp
        2. Trong lớp học, dùng cú pháp sau: *<commit_type>: <short_description>*. Trong đó:
        - <commit_type>: loại commit:
            - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
            - feat: thêm tính năng mới, test case mới.
            - fix: sửa lỗi 1 test trước đó.
        - <short_description>: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

### Simple workflow
#### Trường hợp không dùng global config
- init -> config -> add -> commit -> push.

#### Trường hợp dùng global config
- init -> add -> commit -> push.

# JavaScript basic
## In ra màn hình 1 nội dung
- Dùng lệnh:
    - *console.log(“nội dung”);*
    - *console.log(‘nội dung’);*

## Comment
- Comment là cách “vô hiệu hoá” tạm thời một đoạn code. Dòng code được comment sẽ bị bỏ qua, không được thực thi.
- Có 2 cách comment
    1. Comment 1 dòng: thêm // vào trước đoạn code muốn comment (có thể thêm vào giữa dòng).
    2. Comment nhiều dòng: thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng.

## Biến và hằng
### Biến
- Biến là khái niệm cơ bản nhất trong lập trình. Từ biến trong “biến thiên”, có nghĩa là thay đổi được.
- Khai báo biến: *<từ khoá> <tên biến> = <giá trị>*.
- Quy tắc đặt tên biến:
    - Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $. Ví dụ: *name*, *_name*, *$name*,...
    - KHÔNG chứa dấu cách. Ví dụ: *my name* => sai.
    - KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (chẳng hạn như: var, let, for, if,...). Ví dụ: *for* => sai.
- Thay đổi giá trị của biến: gán lại tên biến cho giá trị mới: *<tên biến> = <giá trị>*.

### Hằng
- Hằng là các giá trị không thay đổi được. Từ "hằng" trong từ hằng số. Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần.
- Khai báo hằng: *<từ khoá> <tên hằng> = <giá trị>* (Từ khoá: *const*).

### Khi nào dùng biến? Khi nào dùng hằng?
- Mặc định dùng *const* - giúp code an toàn hơn, dễ đọc hơn.
- Chỉ dùng *let* khi chắc chắn cần gán lại giá trị.
- Không dùng *var*.

## Kiểu dữ liệu
### Number
- Gồm số nguyên và số thực (không phân biệt int/float):
    - *const age = 25;* -> Số nguyên.
    - *const price = 19.99;* -> Số thực.
    - *const infinity = Infinity;* -> Vô hạn (khi chia 1 số cho 0).
    - *const notANumber = NaN;* -> Không phải là số (Khi thực hiện 1 phép tính giữa số và 1 giá trị không phải số).

### String
- String: Chuỗi ký tự:
    - *const name = "John";* -> Dùng nháy kép.
    - *const message = 'Hello';* -> Dùng nháy đơn.
    - *const template = `Age: 10`;* -> Dùng "backtick" (dấu huyền cạnh số 1).

### Boolean
- Boolean: Giá trị logic:
    - *const isActive = true;* -> Giá trị đúng.
    - *const isComplete = false;* -> Giá trị sai.

### Data Type
- Cách kiểm tra kiểu dữ liệu của 1 biến:
    1. Đọc code xem cách khai báo.
    2. Sử dụng hàm *typeof*: *typeof <biến>* -> Output: *number* || *string* || *boolean*.

## Toán tử so sánh
- Toán tử so sánh dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng
boolean.
- Chia làm ba nhóm:
    - So sánh bằng: "==" và "===".
    - So sánh không bằng: "!"
    - So sánh lớn hơn, nhỏ hơn: ">", "<", "<=" và ">=".

### So sánh "==" và so sánh "==="
- Luôn dùng so sánh "==="!
- Chỉ sử dụng "==" khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.

## Toán tử logic
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean:
    - && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng.
    - || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng.

## Toán tử một ngôi
- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau:
    - *++x;*
    - *--x;*
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau:
    - *x++;*
    - *x--;*

## Toán tử toán học
- Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã
được học: "+", "-", "*" và "/".

## Câu điều kiện
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy.
- Cú pháp:
        
        if (<điều kiện>) {
            code…
        }

- Có thể kết hợp nhiều điều kiện:
        
        if (<điều kiện_1 && điều kiện_2>) {
            code…
        }
    hoặc

        if (<điều kiện_1>) {
            if (<điều kiện_2>) {
                code…
            }
        }

## Vòng lặp
- Vòng lặp dùng để lặp lại 1 đoạn logic.
- Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng.
- Cú pháp vòng lặp for (i):

        for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
            code
        }

    Trong đó:
    - Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
    - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
    - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.
