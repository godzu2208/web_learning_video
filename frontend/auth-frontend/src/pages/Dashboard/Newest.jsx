import React, { useState, useRef, useCallback, useEffect } from "react";
import "./css/Test.css";
import arrL from "./logo/arrow-left.svg";
import arrR from "./logo/arrow-right.svg";
import imgHTML from "./course-img/html.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Newest = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const itemsPerSlide = 3;
    const totalItems = 20;
    const itemWidth = 300;
    const animationDuration = 100; // 100ms for animation

    const smoothScroll = useCallback((targetIndex) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const startPos = currentIndex * itemWidth;
        const targetPos = targetIndex * itemWidth;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);

            // Easing function for smoother animation
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentPosition = startPos + (targetPos - startPos) * easeProgress;

            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${currentPosition}px)`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCurrentIndex(targetIndex);
                setIsAnimating(false);
            }
        };

        requestAnimationFrame(animate);
    }, [currentIndex, isAnimating, itemWidth]);

    const scrollLeft = useCallback(() => {
        if (isAnimating) return;
        const targetIndex = currentIndex === 0 ? 0 : currentIndex - itemsPerSlide;
        smoothScroll(targetIndex);
    }, [currentIndex, isAnimating, itemsPerSlide, smoothScroll]);

    const scrollRight = useCallback(() => {
        if (isAnimating) return;
        const targetIndex = currentIndex + itemsPerSlide >= totalItems
            ? 0
            : currentIndex + itemsPerSlide;
        smoothScroll(targetIndex);
    }, [currentIndex, isAnimating, itemsPerSlide, totalItems, smoothScroll]);

    // Cleanup effect
    useEffect(() => {
        return () => setIsAnimating(false);
    }, []);

    return (
        <div className="newest-courses">
            <div className="layout">
                <div className="heading">
                    Newest Courses
                </div>
                <div className="layout-container">
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
                                            willChange: 'transform',
                                        }}
                                    >
                                        {[...Array(totalItems)].map((_, index) => (
                                            <div key={index} className="course-newest-item">
                                                <div className="course-item-newest_content">
                                                    <img src={imgHTML} alt="course" />
                                                    <div className="course-item-newest_card">
                                                        <div className="text-content-newest">
                                                            <div className="text-link-newest">
                                                                <a className="link-primary" href="/course/fe">
                                                                    HTML for Beginners
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="user-level-newest">
                                                            <div className="view-user-newest">
                                                                <div className="view-total-newest">
                                                                    <FontAwesomeIcon className="icon" icon={faEye} />
                                                                    <span>
                                                                        <span>
                                                                            23 Views
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="user-total-newest">
                                                                    <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                                    <span>
                                                                        <span>
                                                                            12 Users
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="level-user">
                                                                <div className="level-user_cont-newest">
                                                                    Beginner
                                                                </div>
                                                            </div>
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
                </div>
            </div>
        </div>
    );
};

export default Newest;