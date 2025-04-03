import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Dashboard/Header";
import PathLearning from "../Dashboard/PathLearning";
import Footer from "../Dashboard/Footer";
import "./css/course.css";
import Breadcrumb from "./Breadcrump";
import arr from "./logo/arrow-left.svg";
// import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { useLocation } from "react-router-dom";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("available");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValueMenu, setSelectedValueMenu] = useState("New releases");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "");
  // const location = useLocation();

  useEffect(() => {
    const type = searchParams.get("type") || "available";
    const tag = searchParams.get("tag");
    if (tag) {
      setSelectedTag(tag);
    }
    if (!searchParams.get("tag")) {
      setSelectedTag("");
    }
    setActiveTab(type);
  }, [searchParams]);

  // Nội dung hiển thị dựa trên tab hiện tại
  const renderContent = () => {
    switch (activeTab) {
      case "available":
        return <div>Available Courses Content</div>;
      case "trending":
        return <div>Trending Courses Content</div>;
      case "contributing":
        return <div>Contributing Courses Content</div>;
      default:
        return <div>Available Courses Content</div>;
    }
  };

  // filter of tags
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    searchParams.set("tag", tag);
    // window.history.pushState(
    //   {},
    //   "",
    //   `${location.pathname}?${searchParams.toString()}`
    // );
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      tag,
    });
  };

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

            <section className="container-courses">
              <div className="cross-bar">
                <div className="cross-bar-row">
                  <div className="leftBar"></div>
                  <div className="rightBar">
                    <ul className="menu-tab">
                      <li
                        className={`available ${
                          activeTab === "available" ? "active" : ""
                        }`}
                        onClick={() =>
                          setSearchParams({
                            ...Object.fromEntries(searchParams.entries()),
                            type: "available",
                          })
                        }
                      >
                        Available Courses
                      </li>
                      <li
                        className={`trending ${
                          activeTab === "trending" ? "active" : ""
                        }`}
                        onClick={() =>
                          setSearchParams({
                            ...Object.fromEntries(searchParams.entries()),
                            type: "trending",
                          })
                        }
                      >
                        Trending Courses
                      </li>
                      <li
                        className={`contributing ${
                          activeTab === "contributing" ? "active" : ""
                        }`}
                        onClick={() =>
                          setSearchParams({
                            ...Object.fromEntries(searchParams.entries()),
                            type: "contributing",
                          })
                        }
                      >
                        Contributing Courses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cross-bar">
                <div className="cross-bar-row">
                  <div className="leftBar"></div>
                  <div className="rightBar">
                    <div className="filter-header">
                      <div className="results-info">
                        <div className="certifate-page">
                          <div className="results flex-1">
                            Showing <span class="bold text-black">1-15</span> of{" "}
                            <span class="bold text-black">59</span> results
                          </div>
                        </div>
                      </div>
                      <div className="certifates-sortBy">
                        <div className="select-box">
                          <div className="select-box-item">
                            <div className="item-control">
                              <span className="item-children">
                                <div
                                  id="filter_form_orderType"
                                  class="ant-select"
                                >
                                  <div class="ant-select-selection">
                                    <div
                                      class="ant-select-selection__rendered"
                                      onClick={() => {
                                        console.log(1);
                                        setIsDropdownOpen(!isDropdownOpen);
                                      }}
                                    >
                                      <div
                                        class="ant-select-selection-selected-value"
                                        id="selectedValue"
                                      >
                                        {selectedValueMenu}{" "}
                                        {/* Hiển thị giá trị được chọn */}
                                      </div>
                                    </div>
                                    <span class="ant-select-arrow">
                                      <img
                                        src={arr}
                                        className={`icon-arrow ${
                                          isDropdownOpen ? "rotated" : ""
                                        }`}
                                        alt="arrow"
                                      />
                                    </span>
                                  </div>
                                  {/* Menu thả xuống */}
                                  {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                      {[
                                        "New releases",
                                        "Most tests",
                                        "Most views",
                                        "Most enrollments",
                                      ].map((option) => (
                                        <div
                                          key={option}
                                          className={`dropdown-item ${
                                            selectedValueMenu === option
                                              ? "selected"
                                              : ""
                                          }`}
                                          onClick={() => {
                                            setSelectedValueMenu(option);
                                            setIsDropdownOpen(false);
                                            console.log(`${option} selected`);
                                          }}
                                        >
                                          {option}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="courses-layout-center">
                <div className="courses-ant-row">
                  {/* LEFT */}
                  <div className="ant-left-col">
                    <div className="certifate-tag">
                      <div className="search">
                        <span className="ant-input">
                          <input
                            placeholder="Enter keyword..."
                            type="input"
                            name=""
                          />
                          <span className="ant-input-suffix">
                            <FontAwesomeIcon
                              className="search-icon"
                              icon={faMagnifyingGlass}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tags">
                        {[
                          "Linux",
                          "CCNA",
                          "CCNP",
                          "Ruby",
                          "AWS",
                          "FE",
                          "BE",
                          "Kubernetes",
                          "Security",
                          "AI Agent",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className={`ant-tag ${
                              selectedTag === tag ? "selected" : ""
                            }`}
                            onClick={() => handleTagClick(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* <div className="tags">
                        <span className="ant-tag">Linux</span>
                        <span className="ant-tag">CCNA</span>
                        <span className="ant-tag">CCNP</span>
                        <span className="ant-tag">Ruby</span>
                        <span className="ant-tag">AWS</span>
                        <span className="ant-tag">FE</span>
                        <span className="ant-tag">BE</span>
                        <span className="ant-tag">Kubernets</span>
                        <span className="ant-tag">Sercurity</span>
                        <span className="ant-tag">AI Agent</span>
                      </div> */}
                    </div>
                    <div className="certifate-categories">
                      <div className="title">
                        <p>Categories</p>
                      </div>
                      <div className="list">
                        <div className="ant-form-item">
                          <div className="ant-form-item-wrapper">
                            <div className="ant-item-control">
                              <span className="ant-item-children">
                                <span className="ant-checkbox-group">
                                  {/* checkbox */}

                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">Linux</span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Networking
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Cybersecurity
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Cloud Computing
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      AI & Machine Learning
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Web Development
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Mobile Development
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Data Science
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">DevOps</span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Database Management
                                    </span>
                                  </label>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="certifate-categories">
                      <div className="title">
                        <p>Level</p>
                      </div>
                      <div className="list">
                        <div className="ant-form-item">
                          <div className="ant-form-item-wrapper">
                            <div className="ant-item-control">
                              <span className="ant-item-children">
                                <span className="ant-checkbox-group">
                                  {/* checkbox */}
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Beginner
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Intermediate
                                    </span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Advanced
                                    </span>
                                  </label>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="certifate-categories">
                      <div className="title">
                        <p>Others</p>
                      </div>
                      <div className="list">
                        <div className="ant-form-item">
                          <div className="ant-form-item-wrapper">
                            <div className="ant-item-control">
                              <span className="ant-item-children">
                                <span className="ant-checkbox-group">
                                  {/* checkbox */}
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">Newest</span>
                                  </label>
                                  <label className="ant-checkbox-group-item">
                                    <span className="ant-checkbox">
                                      Most Popular
                                    </span>
                                  </label>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="ant-right-col">{renderContent}</div>
                </div>
              </div>
            </section>
          </div>
        </>
        <PathLearning />
        <Footer />
      </div>
    </>
  );
};

export default Courses;
