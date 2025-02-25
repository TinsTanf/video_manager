import React from "react";
import { Image, Card } from "antd";

const FrameResults = () => (
  <Card title="📸 Hình ảnh" style={{ borderRadius: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10 }}>
      {[...Array(4)].map((_, i) => (
        <Image key={i} width="100%" height={160} src={`https://picsum.photos/200/160?random=${i + 1}`} style={{ objectFit: "cover", borderRadius: 8 }} />
      ))}
    </div>
  </Card>
);

export default FrameResults;
