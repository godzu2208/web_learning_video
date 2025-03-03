import React from "react";
import "./Dashboard.css";
import logo from './logo.png';
const Header = () => {
  return (
    <nav className="navbar fixed-header">
      <img src={logo} alt="Hexagon Elearning" className="logo" style={{ height: '60px', marginRight: '20px' }} />
      <div className="nav-links">
        <ul className="nav-links">
            <a href="/">Trang chủ</a>
            <a href="/courses">Khóa học</a>
            <a href="/about">Về chúng tôi</a>
        </ul>
      </div>
 
      
      <div className="narRights">
        <a href="/login" className="login-btn">FAQ</a>
        <a href="/login" className="login-btn">Đăng nhập</a>
      </div>
    </nav>
  );
};

const Banner = () => {
  return (
    <div className="banner">
        <div class="text-wrapper">
            <div class="text-title">Hệ thống</div>
            <div class="text-title margin-bottom-20">học tập trực tuyến</div>
            <div class="text-name">HEXAGON</div>
            <div class="search-area">
                <div class="pgn__searchfield d-flex pgn__searchfield--external">
                    <form role="search" class="pgn__searchfield-form">
                      <div class="pgn__searchfield_wrapper">
                            {/* <label for="pgn-searchfield-input-1" class="m-0">
                                <span class="sr-only">search</span>
                            </label> */}
                            <input class="form-control" type="text" placeholder="Tìm khóa học của bạn!" 
                            role="searchbox" id="pgn-searchfield-input-1" name="searchfield-input" value="" 
                            autocomplete="off"/>
                      </div>
                      <button type="submit" class="pgn__searchfield__button btn btn-primary">
                        Tìm kiếm
                        {/* <span class="sr-only">submit search</span> */}
                      </button>
                    </form>
                    </div>
                    </div>
                    </div>
      {/* <h1>E-Learning Hexagon</h1> */}
      {/* <input type="text" placeholder="Tìm khóa học của bạn!" /> */}
    </div>
  );
};

const VideoGuide = () => {
  const videos = [
    { title: "Cách đăng nhập HUTECH eLearning", src: "video1.mp4" },
    { title: "Cách làm bài tập", src: "video2.mp4" },
    { title: "Cấu trúc khóa học", src: "video3.mp4" }
  ];
  return (
    <div className="video-section">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <video controls>
            <source src={video.src} type="video/mp4" />
          </video>
          <p>{video.title}</p>
        </div>
      ))}
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
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.teacher}</p>
          {/* <img src="./logo.png" alt="HEXAGON" className="logo" /> */}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="fixed-footer">
      <p>© {new Date().getFullYear()} Hexagon E-Learning.</p>
    </footer>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">
        <Banner />
        <VideoGuide />
        <CourseList />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
