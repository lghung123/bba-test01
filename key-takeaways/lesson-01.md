# Cài đặt NVM và NodeJs
- NVM = Node Version Manager = quản lý các phiên bản NodeJs.
- NodeJs = Công cụ để chạy code.

## NVM
- On Mac: chạy lệnh ```brew install nvm```
- On Window: dùng link https://github.com/coreybutler/nvmwindows/releases

# NodeJs
- Chạy lệnh: ```nvm install v22.9.0``` để install.
- Chạy lệnh: ```nvm use v22.9.0``` để sử dụng version tương ứng.

# Cài đặt Playwright
- Tạo 1 thư mục mới (Ví dụ: pw-course/).
- Chạy lệnh: ```npm init playwright@latest```.
- Đi tới file: example.spec.ts (nằm trong thư mục test/).
- Click run test.

# Cài đặt Git và GitHub
## Git
- Đối với máy Mac: có sẵn Git.
- Đối với máy Windows: Cài đặt thông qua link https://git-scm.com/download.

### Cấu hình mặc định cho Git
- Config username: ```git config --global user.name "<name>"```.
- Config email: ```git config --global user.email "<email>"```.
- Config branch default: ```git config --global init.defaultBranch main```.

## GitHub
- Tạo tài khoản GitHub thông qua đường link: https://github.com/signup.

# Cài đặt Visual Studio Code
- VS Code = IDE = integrated development environment: Là công cụ để viết
code
- Tải và cài đặt Visual Studio Code qua đường link: https://code.visualstudio.com/.
- Cài đặt Playwright extension: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright.

# Kết nối với GitHub
- Tạo ssh key với câu lệnh: ```ssh-keygen -t rsa -b 4096 -C "your_email@example.com"```.
    - Lưu ý: nếu file đã tồn tại, cần kiểm tra kỹ trước khi ghi đè.
- Lấy nội dung ssh key: ```cat ~/.ssh/id_rsa.pub```.
- Copy nội dung key và truy cập link: https://github.com/settings/ssh/new để thêm ssh key.

# Đưa code lên GitHub
## Tạo repo
- Truy cập: https://github.com/new.
- Điền tên repository.
- Chọn "Public".

## Khởi tạo và push code
- Khởi tạo repo local: ```git init```.
- Liên kết repository vừa tạo với Git: ```git remote add origin <ssh_link>```.
- Thêm code: ```git add .```.
- Thêm commit: ```git commit -m"init project"```.
- Push code: ```git push origin main```.

## Invite collaborators
- Truy cập repo setting: https://github.com/<user_name>/<repo_name>/settings/access
- Add collaborator.