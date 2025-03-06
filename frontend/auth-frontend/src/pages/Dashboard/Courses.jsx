import "./css/Courses.css";
import imgFE from "./course-img/fe.jpg"
import imgHTML from "./course-img/html.jpg"
import imgCSS from "./course-img/css.jpg"
import imgJS from "./course-img/js.jpg"
import imgReact from "./course-img/reactjs.jpg"
import imgGit from "./course-img/git.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const Courses = () => {

    return (
        <div className="courses">
            <div className="courses-content">
                <div className="heading">
                    Most Popular Courses
                </div>
                <div className="courses-list">
                    <div className="list-flex">
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgFE} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                Fundamental Information Technology Engineer Examination (FE)
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* HTML */}
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgHTML} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                HTML for Beginners
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgJS} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                Javascript Core
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* React JS */}
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgReact} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                React.js Essentials
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CSS */}
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgCSS} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                CSS Basic
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Git */}
                        <div className="course-item">
                            <div className="course-item_content">
                                <img src={imgGit} alt="course" />

                                <div className="course-item_card">
                                    <div className="text-content">
                                        <div className="text-link">
                                            <a className="link-primary" href="/course/fe">
                                                Git Essentials
                                            </a>
                                        </div>
                                    </div>
                                    {/* user-level */}
                                    <div className="user-level">
                                        <div className="view-user">
                                            <div className="view-total">
                                                <FontAwesomeIcon className="icon" icon={faEye} />
                                                <span>
                                                    <span>
                                                        23
                                                        Views
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="user-total">
                                                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                                                <span>
                                                    <span>
                                                        12
                                                        Users
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="level-user">
                                            <div className="level-user_cont">
                                                Beginner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;