import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Row, Col, Card, Modal } from "antd";
import Sidebar from "./components/Sidebar";
import SearchPanel from "./components/SearchPanel";
import ResultsTable from "./components/ResultsTable";
import FrameResults from "./components/FrameResults";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

const { Header, Content, Sider } = Layout;

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <h2 style={{ color: "#fff", margin: 0 }}>🎬 Video Manager</h2>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#001529" }}>
            <Sidebar onSelectVideo={handleVideoSelect} />
          </Sider>

          <Layout style={{ padding: "24px", background: "#f0f2f5" }}>
            <Content>
              <Row gutter={[16, 16]}>
                <Col span={24}><SearchPanel /></Col>
                <Col span={12}><FrameResults /></Col>
                <Col span={12}><ResultsTable /></Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>

      {/* Modal hiển thị video */}
      {/* <Modal
        title={selectedVideo?.title || "Video không tồn tại"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        {selectedVideo && <VideoPlayer video={selectedVideo} />}
      </Modal> */}
    </Router>
  );
}

export default App;
