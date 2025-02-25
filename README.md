1. FrameResult
    - Sử dụng image và card từ thư viện antd để hiển thị ảnh.
    - Dùng mảng 4 phần tử để tạo ra 4 ảnh ngẫu nhiên có kích thước cố định.
2. ResultTable
    - Sử dụng Table, Button, Space từ thư viện antd để hiển thị dữ liệu
    - Định nghĩa các cột,...
3. SearchPanel
    - Sử dụng Form, Input,... từ thư viện antd để tạo giao diện tìm kiếm
    - Sử dụng button để tạo các nút ( Space để tạo khoảng cách các nút có thể css để chỉnh khoảng cách cho phù hợp)
    - Disabled={!searchKeyword} sẽ là điều kiện để tìm kiếm nếu rỗng giá trị sẽ là true và không thể tìm kiếm còn có từ
    khóa thì giá trị sẽ là false -> cho phép bấm nút
4. Sidebar
    - UseState, useEffect để mở modal khi chọn video
    - Sử dụng hàm handleOpenVideo để mở video chọn từ danh sách
    - Hàm handleUpload để xử lý sự kiện tải video lên có trạng thái và thông báo
    - Sử dụng layout.sider, menu, submenu,... từ thư viện antd
    - VideoCameraOutlined là icon xem video, UploadOutlined tải video lên