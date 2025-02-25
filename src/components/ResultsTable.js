import React from "react";
import { Table, Button, Space } from "antd";

const columns = [
  { title: "Tên File", dataIndex: "fileName", key: "fileName", width: 150 },
  { title: "Thời điểm", dataIndex: "timestamp", key: "timestamp", width: 120 },
  { title: "Tóm tắt nội dung", dataIndex: "summary", key: "summary", width: 250, ellipsis: true },
  { title: "Loại phát hiện", dataIndex: "detectionType", key: "detectionType", width: 120 },
  { title: "Độ chính xác", dataIndex: "accuracy", key: "accuracy", width: 120, render: (text) => `${text}%` },
  { title: "Số lượng", dataIndex: "objectCount", key: "objectCount", width: 100 },
  { 
    title: "Nguồn Video", 
    dataIndex: "source", 
    key: "source", 
    width: 150,
    render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">Xem nguồn</a> 
  },
  { 
    title: "Thao tác", 
    key: "actions", 
    align: "center", 
    fixed: "right",
    width: 180,
    render: () => (
      <Space size="middle">
        <Button type="primary">Xem chi tiết</Button>
        <Button type="dashed">Tải xuống</Button>
      </Space>
    ) 
  }
];

const data = [
  { 
    key: "1", 
    fileName: "Video1.mp4", 
    timestamp: "00:05:12", 
    summary: "Phát hiện đối tượng di chuyển.", 
    detectionType: "Người", 
    accuracy: 95, 
    objectCount: 3, 
    source: "https://example.com/video1.mp4"
  },
  { 
    key: "2", 
    fileName: "Video2.mp4", 
    timestamp: "00:10:30", 
    summary: "Xuất hiện khuôn mặt nghi ngờ.", 
    detectionType: "Khuôn mặt", 
    accuracy: 87, 
    objectCount: 1, 
    source: "https://example.com/video2.mp4"
  }
];

const ResultsTable = () => {
  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      pagination={{ pageSize: 5 }} 
      scroll={{ x: "max-content" }} 
      bordered
      footer={() => (
        <p style={{ textAlign: "center" }}>
          <strong>Summary:</strong> Đây là kết quả
        </p>
      )}
      />
  );
};

export default ResultsTable;
