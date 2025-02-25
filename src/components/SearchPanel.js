import React, { useState } from "react";
import { Input, Button, Upload, Form, Card, Image, Space } from "antd";
import { UploadOutlined, SearchOutlined } from "@ant-design/icons";

const SearchPanel = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [condition, setCondition] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  return (
    <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <Form layout="vertical">
        <Form.Item label="Từ khóa tìm kiếm">
          <Input
            placeholder="Nhập từ khóa..."
            prefix={<SearchOutlined />}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Upload showUploadList={false} accept="image/*">
              <Button icon={<UploadOutlined />} style={{ fontWeight: "bold" }}>
                Tải ảnh lên
              </Button>
            </Upload>
            <Button type="primary" icon={<SearchOutlined />} style={{ fontWeight: "bold" }} disabled={!searchKeyword}>
              Tìm kiếm
            </Button>
          </Space>
        </Form.Item>

        <Form.Item label="Điều kiện tìm kiếm">
          <Input.TextArea
            placeholder="Nhập điều kiện tìm kiếm..."
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>

        <Form.Item label="Chọn label">
          <Space>
            <Button type={selectedLabels.includes("Label 1") ? "primary" : "default"}>Label 1</Button>
            <Button type={selectedLabels.includes("Label 2") ? "primary" : "default"}>Label 2</Button>
          </Space>
        </Form.Item>

        {uploadedImage && (
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Image width={100} height={100} src={uploadedImage} alt="Ảnh tải lên" style={{ objectFit: "cover", borderRadius: "10px" }} />
          </div>
        )}
      </Form>
    </Card>
  );
};

export default SearchPanel;