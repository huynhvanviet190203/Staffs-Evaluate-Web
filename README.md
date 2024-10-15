
# Staffs Evaluate Web

# Giới thiệu

**Staffs Evaluate Web** là hệ thống đánh giá hiệu suất làm việc của nhân viên dựa trên các tiêu chí định trước. Hệ thống giúp quản lý thông tin nhân viên, thực hiện đánh giá, và quản lý phản hồi một cách hiệu quả. Dự án sử dụng Node.js làm back-end, MongoDB làm cơ sở dữ liệu, và front-end được phát triển bằng HTML, CSS kết hợp với jQuery.

# Chức năng chính

- Đăng ký/Đăng nhập: Cho phép người dùng đăng ký tài khoản mới hoặc đăng nhập vào hệ thống với quyền hạn tương ứng.
- Quản lý nhân viên: Admin có thể thêm, chỉnh sửa, xóa nhân viên và xem thông tin chi tiết của từng nhân viên.
- Đánh giá nhân viên: Người quản lý có thể đánh giá hiệu suất làm việc của nhân viên theo các tiêu chí như hiệu suất công việc, kỹ năng, thái độ và tinh thần làm việc.
- Xem và phản hồi: Nhân viên có thể xem đánh giá của mình và gửi phản hồi tới người quản lý.
- Báo cáo: Hệ thống cung cấp báo cáo tổng hợp và thống kê các kết quả đánh giá của từng nhân viên và theo các tiêu chí đánh giá cụ thể.

# Công nghệ sử dụng trong hệ thống:

- Bạck-end: Node.js (Express.js)
- Cơ sở dữ liệu: MongoDB (Mongoose)
- Frontend: HTML, CSS, JavaScript, jQuery
- Trình duyệt: Google Chrome, Firefox, Edge

# Cài đặt

1. Clone dự án về máy:
   ```bash
   git clone https://github.com/username/staffs-evaluate-web.git
   ```

2. Di chuyển vào thư mục dự án và cài đặt các dependencies:
   ```bash
   cd staffs-evaluate-web
   npm install
   ```

3. Cấu hình kết nối cơ sở dữ liệu MongoDB trong file `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/staffs-evaluate
   ```

4. Chạy dự án:
   ```bash
   npm start
   ```

5. Truy cập hệ thống tại địa chỉ:
   ```
   http://localhost:3000
   ```

## Hướng dẫn sử dụng

1. **Đăng ký và đăng nhập:** Người dùng mới có thể đăng ký tài khoản mới hoặc đăng nhập vào hệ thống với thông tin đăng nhập đã có.
2. **Thêm nhân viên:** Admin có thể thêm nhân viên mới trong phần quản lý nhân viên.
3. **Đánh giá nhân viên:** Người quản lý chọn nhân viên và tiến hành đánh giá dựa trên các tiêu chí được định nghĩa.
4. **Xem và phản hồi:** Nhân viên xem đánh giá của mình và có thể phản hồi lại với quản lý.
5. **Xem báo cáo:** Quản lý và admin có thể xem báo cáo tổng quan về hiệu suất của từng nhân viên hoặc tổng hợp theo các tiêu chí.

## Thư viện sử dụng

- **Back-end:**
  - [Express.js](https://expressjs.com/): Web framework cho Node.js.
  - [Mongoose](https://mongoosejs.com/): ODM cho MongoDB để kết nối và quản lý dữ liệu.
  
- **Front-end:**
  - **HTML/CSS**: Để xây dựng giao diện người dùng.
  - [jQuery](https://jquery.com/): Thư viện JavaScript để xử lý sự kiện và thao tác DOM.

## Đóng góp

Nếu bạn muốn đóng góp vào dự án, vui lòng fork repository, tạo nhánh mới và gửi pull request.

## License

Dự án được cấp phép theo [MIT License](LICENSE).

---

Phần README này đã được điều chỉnh theo cấu trúc của dự án với các công nghệ như Node.js, Express, MongoDB, và front-end HTML, CSS, jQuery.
