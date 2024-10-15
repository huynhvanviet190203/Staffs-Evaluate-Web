

# Staffs Evaluate Web

## Giới thiệu

Staffs Evaluate Web là một hệ thống quản lý và đánh giá nhân viên trực tuyến, cung cấp nền tảng cho các doanh nghiệp đánh giá hiệu suất làm việc của nhân viên dựa trên các tiêu chí định trước. Hệ thống giúp tối ưu hóa quá trình đánh giá, cung cấp báo cáo chi tiết và quản lý các phản hồi để cải thiện hiệu suất công việc.

## Chức năng chính

- **Đăng ký/Đăng nhập:** Người dùng có thể tạo tài khoản và đăng nhập vào hệ thống với quyền truy cập tương ứng.
- **Quản lý nhân viên:** Admin có thể thêm, chỉnh sửa, và xóa thông tin nhân viên trong hệ thống.
- **Đánh giá nhân viên:** Người quản lý có thể đánh giá nhân viên dựa trên các tiêu chí như hiệu suất, thái độ, kỹ năng chuyên môn, và mức độ hoàn thành công việc.
- **Phản hồi:** Nhân viên có thể xem các đánh giá của mình và phản hồi lại với người quản lý.
- **Báo cáo:** Hệ thống cung cấp báo cáo tổng quan về hiệu suất nhân viên theo thời gian và các tiêu chí cụ thể.

Công nghệ sử dụng

- **Ngôn ngữ lập trình:** ASP.NET Core, C#
- **Cơ sở dữ liệu:** SQL Server
- **Frontend:** HTML, CSS, JavaScript
- **Trình duyệt:** Google Chrome, Firefox, Edge
- **Công cụ khác:** .NET SDK, Entity Framework

## Cài đặt

1. Clone dự án về máy:
   ```bash
   git clone https://github.com/username/staffs-evaluate-web.git
   ```
2. Cài đặt các dependency:
   ```bash
   dotnet restore
   ```
3. Cấu hình kết nối cơ sở dữ liệu trong file `appsettings.json`:
   ```json
   "ConnectionStrings": {
      "DefaultConnection": "Server=.;Database=StaffsEvaluate;Trusted_Connection=True;"
   }
   ```
4. Chạy migrations để tạo bảng trong cơ sở dữ liệu:
   ```bash
   dotnet ef database update
   ```
5. Chạy dự án:
   ```bash
   dotnet run
   ```

## Hướng dẫn sử dụng

1. **Đăng ký và đăng nhập:** Người dùng mới cần đăng ký tài khoản và sau đó đăng nhập vào hệ thống.
2. **Thêm nhân viên:** Admin vào phần "Quản lý nhân viên" để thêm thông tin nhân viên.
3. **Đánh giá nhân viên:** Người quản lý chọn nhân viên và tiến hành đánh giá theo các tiêu chí có sẵn.
4. **Xem báo cáo:** Admin và quản lý có thể xem báo cáo tổng hợp hiệu suất của từng nhân viên.

## Đóng góp

Nếu bạn muốn đóng góp vào dự án, vui lòng fork repository, tạo nhánh mới và gửi pull request.

## License

Dự án được cấp phép theo [MIT License](LICENSE).

---

Hy vọng phần README này sẽ giúp ích cho dự án của bạn!
