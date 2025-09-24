# Git
## Undo
### Sửa message khi commit:

        git commit --amend -m"message"

### Chuyển file từ vùng staging → vùng working directory:
- Chuyển file cụ thể:

        git restore --staged <file_name>

- Chuyển toàn bộ file:

        git restore --staged .

### Chuyển file từ vùng repository → vùng working directory (un-commit):

        git reset HEAD~N

Trong đó: N là số commit gần nhất

### Notes
- Commit đầu tiên không thể bị reset.
- Nếu muốn reset → xoá thư mục *.git* đi rồi init lại

## Branching
### Pull code

        git pull origin main

### Branch
- Git sử dụng nhánh (branch) để tạo ra các “phiên bản” riêng của code, tránh ảnh hưởng tới "bản gốc".
- Khi khởi tạo repo (git init), nhánh mặc định sẽ được tạo ra.
- Dùng lệnh *git config --global init.defaultBranch main* để cấu hình nhánh mặc định (main).

#### Xem danh sách nhánh
        git branch

#### Tạo nhánh mới
        git branch <tên_branch>

#### Chuyển sang nhánh mới
        git checkout <tên_branch>

#### Vừa tạo, vừa chuyển sang nhánh mới
        git checkout -b <tên>

#### Xoá branch
        git branch -D <tên nhánh>

#### File ".gitignore" 
- Dùng để bỏ qua các file không cần git theo dõi.
- Ignore file: "*<tên_file>*"
- Ignore folder: "*<tên-thư-mục>/*"

## Checkout về một revision bất kì
        git checkout <revision>

# JavaScript basic
## Object
1. Khai báo:
        
        let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        …
        };

    - Trong đó:
        - <thuoc_tinh>: giống quy tắc đặt tên biến.
        - <gia_tri>: có kiểu giống biến, hoặc là 1 object khác.

2. Sử dụng:
        
        <ten_object>.<thuoc_tinh>;

    hoặc

        <ten_object>["<thuoc_tinh>"];
    - Trả về <gia_tri> của <thuoc_tinh>

3. Gán lại:

        <ten_object>.<thuoc_tinh> = <gia_tri_moi>;

    hoặc

        <ten_object>["<thuoc_tinh>"] = <gia_tri_moi>;

4. Object với const
- Nếu thay cả object bằng một object mới, sẽ gặp lỗi. Ví dụ:

        const student = {“name”: “alex”, “age”: 20}
        student = {“name”: “Nagi”, “age”: 18} // lỗi

- Nếu chỉ thay đổi các thuộc tính của object thì hoàn toàn hợp lệ. Ví dụ:

        const student = {“name”: “alex”, “age”: 20}
        student.name = “Nagi”; // Hợp lệ

5. Thêm thuộc tính vào Object
        
        <ten_object>.<thuoc_tinh_moi> = <gia_tri>;

    hoặc

        <ten_object>["<thuoc_tinh_moi>"] = <gia_tri>;

6. Xóa thuộc tính của Object

        delete <ten_object>.<thuoc_tinh>;

## Array
1. Khai báo:
        
        let/const <ten_array> = [<phan_tu_0>, <phan_tu_1>, <phan_tu_2>, ...];

2. Truy xuất độ dài mảng:

        <ten_array>.length;

3. Lấy phần tử theo index:

        <ten_array>[<index>];

3. Thêm phần tử vào mảng:

        <ten_array>.push(<gia_tri>);

## Function
- Khai báo:

        function <nameFunction>() {
                // code
        }

- Hàm có thể có parameter, hoặc giá trị trả về tùy trường hợp.