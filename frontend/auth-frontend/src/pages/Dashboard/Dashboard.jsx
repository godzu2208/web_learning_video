import React from "react";
import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";

const VideoGuide = () => {
  const videos = [
    { title: "Cách đăng nhập HUTECH eLearning", src: "video1.mp4" },
    { title: "Cách làm bài tập", src: "video2.mp4" },
    { title: "Cấu trúc khóa học", src: "video3.mp4" }
  ];
  return (
    <div className="video-section">
      <h1>Body Content Containers Video</h1>
    </div>
  );
};

const CourseList = () => {
  const courses = [
    { title: "Cơ học vật liệu nâng cao", teacher: "GS.TS Nguyễn Trung Kiên" },
    { title: "Outcome-Based Education", teacher: "GS.TS Nguyễn Trung Kiên" },
    { title: "Tâm lý học phát triển", teacher: "Khoa Xã hội" }
  ];
  return (
    <div className="course-section">
      <h1>Body Content Containers Courses</h1>
    </div>
  );
};



const Dashboard = () => {
  return (
    <div id="root">
      <main>
        <div className="dashboard-container">
          <Header />
          <div className="content">
            <Banner />
            <VideoGuide />
            <CourseList />
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
