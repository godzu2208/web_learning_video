import React from "react";
import Header from "../Dashboard/Header";
import "./css/CoursesDetail.css";
import PathLearning from "../Dashboard/PathLearning";
import Footer from "../Dashboard/Footer";
import Breadcrumb from "./Breadcrump";
import "./css/course.css";

const CoursesDetail = () => {
  return (
    <>
      <div className="main-courses-detail">
        <Header />
        <div className="courses-detail-row">
          <div className="courses-detail-col">
            <section className="courses-detail-banner">
              <Breadcrumb />
              <div className="detail-banner-description">
                <div className="des-container">
                  <div className="des-content"></div>
                </div>
                <div className="text-note"></div>
                <div className="courses-info"></div>
              </div>
            </section>
            <section className="courses-detail-mainboard"></section>
          </div>
        </div>
        <PathLearning />
        <Footer />
      </div>
    </>
  );
};

export default CoursesDetail;
