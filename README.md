HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY DỰ ÁN
----
Dự án này được khởi tạo bằng **Java Spring Boot** và **ReactJS**

---
Bước 1: Chuẩn bị môi trường 
---
**Trước khi bắt đầu, hãy đảm bảo máy tính đã cài đặt các công cụ sau:**

Java JDK (bản 17 trở lên): Để chạy Backend Spring Boot.

Node.js (bản 16 trở lên): Để chạy Frontend React.

MySQL Server: Để quản lý cơ sở dữ liệu.

Bước 2: Cấu hình và Chạy Backend (Java Spring Boot)
---
**Tạo Cơ sở dữ liệu:**

Mở MySQL Workbench.

Tạo một Database mới tên là: ecommerce.

**Cấu hình kết nối:**

Tìm đến file: backend/src/main/resources/application.properties.

**Chỉnh sửa thông tin đăng nhập MySQL:**

spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=tên_đăng_nhập
spring.datasource.password=mật_khẩu

**Khởi chạy:**

Mở Git Bash tại thư mục Backend.

Gõ lệnh: ./mvnw spring-boot:run

Dấu hiệu thành công: Khi thấy dòng chữ Started EcommerceApplication in ... seconds.

Bước 3: Cấu hình và Chạy Frontend (ReactJS)
---
**Mở Git Bash tại thư mục Frontend.**

**Cài đặt thư viện:**

Gõ lệnh: npm install

**Khởi chạy giao diện:**

Gõ lệnh: npm start

Dấu hiệu thành công: Trình duyệt sẽ tự động mở trang web tại địa chỉ http://localhost:3000.
