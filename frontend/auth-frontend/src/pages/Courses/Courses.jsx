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
import Pagination from "./Panination";

import ITCourses from "./certifatesList";
import { itFields } from "./certifatesList"; // Import itFields

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("available");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValueMenu, setSelectedValueMenu] = useState("New releases");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "");
  // const location = useLocation();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    const type = searchParams.get("type") || "available";
    const tag = searchParams.get("tag") || "";
    setActiveTab(type);
    setSelectedTag(tag);
  }, [searchParams]);

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

  const updateSearchParams = (key, value) => {
    const updatedParams = {
      page: searchParams.get("page") || "1",
      level: searchParams.get("level") || "",
      categories: searchParams.get("categories") || "",
      type: searchParams.get("type") || "available",
      tag: searchParams.get("tag") || "",
      other: searchParams.get("other") || "",
      [key]: value,
    };

    Object.keys(updatedParams).forEach((param) => {
      if (!updatedParams[param]) {
        delete updatedParams[param];
      }
    });

    setSearchParams(updatedParams);
  };

  const handleTabClick = (type) => {
    updateSearchParams("type", type);
  };

  // filter of tags
  const handleTagClick = (tag) => {
    // Nếu tag đã được chọn (đang có trong URL), xóa nó đi
    if (searchParams.get("tag") === tag) {
      updateSearchParams("tag", "");
    } else {
      // Nếu tag chưa được chọn, thêm nó vào
      updateSearchParams("tag", tag);
    }
  };

  // categories

  const categoriesTags = [
    "Linux",
    "Google Cloud Platform (GCP)",
    "Security",
    "Web Development",
    "Mobile App",
    "Machine Learning",
    "Amazon Web Services (AWS)",
    "Blockchain",
    "Tools and Utilities",
    "Database",
    "DevOps",
    "Programming Languages",
    "Project Management",
    "Computer Science",
  ];

  const handleCategoryClick = (category) => {
    const currentCategories = searchParams.get("categories")?.split(",") || [];
    let updatedCategories;

    if (currentCategories.includes(category)) {
      updatedCategories = currentCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...currentCategories, category];
    }
    updateSearchParams("categories", updatedCategories.join(","));
  };

  const levelTags = ["Beginner", "Intermediate", "Advanced"];

  const handleLevelClick = (level) => {
    const currentLevels = searchParams.get("level")?.split(",") || [];
    let updatedLevels;

    if (currentLevels.includes(level)) {
      // Nếu level đã tồn tại, loại bỏ nó
      updatedLevels = currentLevels.filter((lvl) => lvl !== level);
    } else {
      // Nếu level chưa tồn tại, thêm nó
      updatedLevels = [...currentLevels, level];
    }

    updateSearchParams("level", updatedLevels.join(","));
  };

  const otherTags = ["Newest", "Most Popular"];
  const handleOtherClick = (other) => {
    const currentOthers = searchParams.get("other")?.split(",") || [];
    let updatedOthers;

    if (currentOthers.includes(other)) {
      // Nếu other đã tồn tại, loại bỏ nó
      updatedOthers = currentOthers.filter((oth) => oth !== other);
    } else {
      // Nếu other chưa tồn tại, thêm nó
      updatedOthers = [...currentOthers, other];
    }

    updateSearchParams("other", updatedOthers.join(","));
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
                        onClick={() => handleTabClick("available")}
                      >
                        Available Courses
                      </li>
                      <li
                        className={`trending ${
                          activeTab === "trending" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("trending")}
                      >
                        Trending Courses
                      </li>
                      <li
                        className={`contributing ${
                          activeTab === "contributing" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("contributing")}
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
                            Showing{" "}
                            <span className="bold text-black">
                              {indexOfFirstItem + 1}-
                              {Math.min(indexOfLastItem, itFields.length)}
                            </span>{" "}
                            of{" "}
                            <span className="bold text-black">
                              {itFields.length}
                            </span>{" "}
                            results
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
                                <div className="ant-checkbox-group">
                                  {/* checkbox */}

                                  {categoriesTags.map((categoriesTag) => {
                                    const isChecked =
                                      searchParams
                                        .get("categories")
                                        ?.split(",")
                                        .includes(categoriesTag) || false;

                                    return (
                                      <label
                                        key={categoriesTag}
                                        className="ant-checkbox-group-item"
                                      >
                                        <span className="ant-checkbox">
                                          <input
                                            type="checkbox"
                                            className="ant-checkbox-input"
                                            value={categoriesTag}
                                            checked={isChecked}
                                            onChange={() =>
                                              handleCategoryClick(categoriesTag)
                                            }
                                          />
                                          <span className="ant-checkbox-inner"></span>
                                        </span>
                                        <span>{categoriesTag}</span>
                                      </label>
                                    );
                                  })}
                                </div>
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
                                <div className="ant-checkbox-group">
                                  {/* checkbox */}

                                  {levelTags.map((levelTag) => {
                                    const isChecked =
                                      searchParams
                                        .get("level")
                                        ?.split(",")
                                        .includes(levelTag) || false;
                                    return (
                                      <label
                                        key={levelTag}
                                        className="ant-checkbox-group-item"
                                      >
                                        <span className="ant-checkbox">
                                          <input
                                            type="checkbox"
                                            className="ant-checkbox-input"
                                            value={levelTag}
                                            checked={isChecked}
                                            onChange={() =>
                                              handleLevelClick(levelTag)
                                            }
                                          />
                                          <span className="ant-checkbox-inner"></span>
                                        </span>
                                        <span>{levelTag}</span>
                                      </label>
                                    );
                                  })}
                                </div>
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
                                <div className="ant-checkbox-group">
                                  {/* checkbox */}
                                  {otherTags.map((otherTag) => {
                                    const isChecked =
                                      searchParams
                                        .get("other")
                                        ?.split(",")
                                        .includes(otherTag) || false;

                                    return (
                                      <label
                                        key={otherTag}
                                        className="ant-checkbox-group-item"
                                      >
                                        <span className="ant-checkbox">
                                          <input
                                            type="checkbox"
                                            className="ant-checkbox-input"
                                            value={otherTag}
                                            checked={isChecked}
                                            onChange={() =>
                                              handleOtherClick(otherTag)
                                            }
                                          />
                                          <span className="ant-checkbox-inner"></span>
                                        </span>
                                        <span>{otherTag}</span>
                                      </label>
                                    );
                                  })}
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="ant-right-col">
                    {renderContent}
                    <div className="ant-right-col-container">
                      <div className="panination-top">
                        <Pagination
                          totalItems={itFields.length}
                          itemsPerPage={10}
                        />
                      </div>
                      <ITCourses />

                      <div className="panination-bottom">
                        <Pagination
                          totalItems={itFields.length}
                          itemsPerPage={10}
                        />
                      </div>
                    </div>
                  </div>
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
