import Header from "../Dashboard/Header";
import PathLearning from "../Dashboard/PathLearning";
import Footer from "../Dashboard/Footer";
import "./css/course.css";
import Breadcrumb from "./Breadcrump";
const Courses = () => {
  return (
    <>
      <div className="main-courses-dashboard">
        <Header />
        <>
          <div className="courses-dashboard">
            <section className="detail-banner">
              <Breadcrumb />
              <div className="courses-mainboard">
                <div className="courses-mainboard-content">
                  <p className="courses-mainboard-content-name">All Courses</p>
                </div>
              </div>
            </section>
            <div className="bg-white"></div>
            <section className="container-courses"></section>
          </div>
        </>
        <PathLearning />
        <Footer />
      </div>
    </>
  );
};

export default Courses;
