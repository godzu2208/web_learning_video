import React, { useState, useRef } from "react";
import "./css/Test.css";
import arrL from "./logo/arrow-left.svg";
import arrR from "./logo/arrow-right.svg";

const CourseSlider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 2; // Mỗi lần trượt 2 thẻ
    const totalItems = 20; // Tổng số thẻ (có thể thay đổi)
    const itemWidth = 300; // Độ rộng của một cột thẻ (px)

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return 0; // Dừng lại tại thẻ đầu tiên
            }
            return prevIndex - itemsPerSlide;
        });
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + itemsPerSlide >= totalItems) {
                return 0; // Quay về thẻ đầu tiên khi đến điểm cuối
            }
            return prevIndex + itemsPerSlide;
        });
    };

    return (
        <div className="content-newest-course">
            <div className="arrow arrow-left" onClick={scrollLeft}>
                <img src={arrL} alt="arrow-left" />
            </div>
            <div className="list-newest">
                <div className="list-slider">
                    <div className="list-sticky">
                        <div
                            className="sticky-track"
                            ref={sliderRef}
                            style={{
                                transform: `translateX(-${currentIndex * itemWidth}px)`,
                                transition: "transform 0.5s ease-in-out",
                            }}
                        >
                            {[...Array(totalItems)].map((_, index) => (
                                <div key={index} className="sticky-column">
                                    <div className="sticky-slide">
                                        <div className="item-content">
                                            <div className="ct-left">
                                                <div className="name-item">AI Agent {index + 1}</div>
                                                <div className="state-item">
                                                    <p className="course-item total">1 course</p>
                                                    <p className="course-item state">1 upcoming course</p>
                                                </div>
                                            </div>
                                            <div className="ct-right">
                                                <img src="logoAI.png" alt="AI" className="logo-topic" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow arrow-right" onClick={scrollRight}>
                <img src={arrR} alt="arrow-right" />
            </div>
        </div>
    );
};

export default CourseSlider;