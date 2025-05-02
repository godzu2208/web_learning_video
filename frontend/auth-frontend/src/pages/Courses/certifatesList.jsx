import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import logoDB from "./logo/database.png";
import userIcon from "./logo/users.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import logos from "./importLogo.js";

export const itFields = [
  {
    title: "Database Management System",
    level: "Beginner",
    link: "/courses/database",
  },
  { title: "Web Development", level: "Intermediate", link: "/courses/web-dev" },
  {
    title: "Mobile App Development",
    level: "Intermediate",
    link: "/courses/mobile-app",
  },
  { title: "Artificial Intelligence", level: "Advanced", link: "/courses/ai" },
  { title: "Cybersecurity", level: "Advanced", link: "/courses/cybersecurity" },
  { title: "Cloud Computing", level: "Intermediate", link: "/courses/cloud" },
  { title: "DevOps", level: "Advanced", link: "/courses/devops" },
  { title: "Data Science", level: "Advanced", link: "/courses/data-science" },
  { title: "UI/UX Design", level: "Beginner", link: "/courses/uiux" },
  {
    title: "Software Testing",
    level: "Intermediate",
    link: "/courses/testing",
  },
  {
    title: "Database Management System",
    level: "Beginner",
    link: "/courses/database",
  },
  { title: "Web Development", level: "Intermediate", link: "/courses/web-dev" },
  {
    title: "Mobile App Development",
    level: "Intermediate",
    link: "/courses/mobile-app",
  },
  { title: "Artificial Intelligence", level: "Advanced", link: "/courses/ai" },
  { title: "Cybersecurity", level: "Advanced", link: "/courses/cybersecurity" },
  { title: "Cloud Computing", level: "Intermediate", link: "/courses/cloud" },
  { title: "DevOps", level: "Advanced", link: "/courses/devops" },
  { title: "Data Science", level: "Advanced", link: "/courses/data-science" },
  { title: "UI/UX Design", level: "Beginner", link: "/courses/uiux" },
  {
    title: "Software Testing",
    level: "Intermediate",
    link: "/courses/testing",
  },
  {
    title: "Software Testing",
    level: "Intermediate",
    link: "/courses/testing",
  },
];

const ITCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  // Fix the useEffect dependency warning
  const page = searchParams.get("page");
  const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   setIsLoading(true);
  //   window.scrollTo(0, 0);
  //   setTimeout(() => setIsLoading(false), 500);
  // }, [page]); // Use the extracted variable

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    window.scrollTo(0, 0);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 200);
        }
        return Math.min(newProgress, 100);
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, [page]);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itFields.slice(indexOfFirstItem, indexOfLastItem);
  const percentage = 100;

  return (
    <div className="certificates-list">
      {isLoading ? (
        <div className="loading">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={{
              path: {
                stroke: `rgba(62, 152, 199, ${progress / 100})`,
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "#d6d6d6",
              },
              text: {
                fill: "#3e98c7",
                fontSize: "16px",
              },
            }}
          />
        </div>
      ) : (
        currentItems.map((course, index) => (
          <div className="certifates-item" key={index}>
            <img src={logoDB} className="img-cover" alt="image-cover" />
            <div className="body-course">
              <div className="title">
                <div className="title-level">
                  <div className="title-level-info">
                    <span className="level-text">{course.level}</span>
                  </div>
                </div>
                <div className="title-description">
                  <a href={course.link}>{course.title}</a>
                </div>
              </div>
              <div className="info">
                <div className="info-content">
                  <div className="info-content-main">
                    <div className="student">
                      <div className="md">
                        <div className="text-sm">
                          <img className="icon" src={userIcon} alt="icon" />
                          <span>26</span>
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div className="md">
                        <div className="text-sm">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCircleQuestion}
                          />
                          <span>360</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="md">
                        <div className="text-sm">
                          <FontAwesomeIcon
                            className="icon op5"
                            icon={faPenToSquare}
                          />
                          <span>0</span>
                        </div>
                      </div>
                    </div>

                    <div className="eye">
                      <div className="md">
                        <div className="text-sm">
                          <FontAwesomeIcon className="icon op5" icon={faEye} />
                          <span>223</span>
                        </div>
                      </div>
                    </div>
                    <div className="calendar">
                      <div className="md">
                        <div className="text-sm">
                          <FontAwesomeIcon className="icon" icon={faCalendar} />
                          <span>09/04/2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ITCourses;
