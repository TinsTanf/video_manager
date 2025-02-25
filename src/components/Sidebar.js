import { Layout, Menu, Upload, message, Button, Divider, Modal } from "antd";
import { 
  VideoCameraOutlined, 
  UploadOutlined
} from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    if (selectedVideo) {
      setVisible(true);
    }
  }, [selectedVideo]);

  const handleOpenVideo = (videoUrl) => {
    setSelectedVideo("");
    setTimeout(() => {
      setSelectedVideo(videoUrl);
    }, 100);
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} đã được tải lên thành công!`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} tải lên thất bại.`);
    }
  };

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ height: "100vh" }}>
        <Menu theme="dark" mode="inline">
          <SubMenu key="sub1" icon={<VideoCameraOutlined />} title="Xem Video">
            <Menu.Item key="video1" onClick={() => handleOpenVideo("https://www.w3schools.com/html/mov_bbb.mp4")}>
              Video 1
            </Menu.Item>
            <Menu.Item key="video2" onClick={() => handleOpenVideo("https://www.w3schools.com/html/movie.mp4")}>
              Video 2
            </Menu.Item>
            {/* Upload Video */}
            <div style={{ padding: "10px 16px", textAlign: "center" }}>
              <Upload
                name="video"
                action="http://localhost:5000/upload"
                accept="video/*"
                showUploadList={false}
                onChange={handleUpload}
              >
                <Button icon={<UploadOutlined />} type="primary" block>
                  Upload Video
                </Button>
              </Upload>
            </div>
          </SubMenu>
          <Divider style={{ backgroundColor: "#fff", margin: "10px 0" }} />
        </Menu>
      </Sider>

      {/* Modal hiển thị video */}
      <Modal 
        open={visible} 
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
      >
        <video key={selectedVideo} width="100%" height="400px" controls>
          <source src={selectedVideo} type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
      </Modal>
    </>
  );
};

export default Sidebar;
