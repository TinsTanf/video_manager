// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, List, Modal, Button } from "antd";

// const videos = [
//   { id: 1, title: "Video 1", url: "https://www.w3schools.com/html/mov_bbb.mp4", type: "mp4" },
//   { id: 2, title: "YouTube Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", type: "youtube" },
// ];

// const getYouTubeEmbedUrl = (url) => {
//   try {
//     const urlObj = new URL(url);
//     if (urlObj.hostname === "youtu.be") {
//       return `https://www.youtube.com/embed/${urlObj.pathname.substring(1)}`;
//     }
//     return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
//   } catch {
//     return "";
//   }
// };

// const VideoPlayer = () => {
//   const { id } = useParams();
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const video = videos.find((v) => v.id === parseInt(id)) || videos[0]; 
//     setCurrentVideo(video);
//   }, [id]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
//       {/* Danh sách video */}
//       <List
//         dataSource={videos}
//         renderItem={(video) => (
//           <List.Item>
//             <Button onClick={() => { setCurrentVideo(video); setIsModalOpen(true); }}>
//               Xem {video.title}
//             </Button>
//           </List.Item>
//         )}
//       />

//       {/* Modal hiển thị video */}
//       <Modal
//         title={currentVideo?.title || "Video không tồn tại"}
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//         width={800}
//       >
//         {currentVideo ? (
//           currentVideo.type === "mp4" ? (
//             <video key={currentVideo.id} controls style={{ width: "100%", height: "auto" }}>
//               <source src={currentVideo.url} type="video/mp4" />
//               Trình duyệt của bạn không hỗ trợ video.
//             </video>
//           ) : (
//             <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
//               <iframe
//                 key={currentVideo.id}
//                 src={getYouTubeEmbedUrl(currentVideo.url)}
//                 title={currentVideo.title}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   border: "none",
//                 }}
//                 allowFullScreen
//               ></iframe>
//             </div>
//           )
//         ) : (
//           <p>Không tìm thấy video</p>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default VideoPlayer;
