import React from "react";
import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";
import Topic from "./Topic.jsx";
import Courses from "./Courses.jsx";
import Newest from "./Newest.jsx";
import HIK from "./HIK.jsx";
import Roadmaps from "./Roadmaps.jsx";
const Dashboard = () => {
  return (
    <div id="root">
      <main>
        <div className="dashboard-container">
          <Header />
          <div className="content">
            <Banner />
            <Topic />
            <Courses />
            <Newest />
            <HIK />
            <Roadmaps />
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
