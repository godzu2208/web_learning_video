import React from "react";
import "./css/Dashboard.css";
import "./css/Header.css";
import logo from './logo/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <header className="layout-header">
            <div className="layout-header_content">
                {/* logo */}
                <div className="logo-header_">
                    <a className="logo-header" href="/">
                        <img src={logo} alt="Hexagon Elearning" className="logo" />
                    </a>
                </div>
                {/* features */}
                <div className="menu-header">
                    {/* Left */}
                    <div className="v-menu">
                        <ul classname="">
                            <li>
                                <a className="" href="/courses"> Courses</a>
                            </li>
                            <li>
                                <a className="" href="/roadmaps"> Roadmaps</a>
                            </li>
                            <li>
                                <a className="" href="/ranking"> Rankings</a>
                            </li>
                            <li>
                                <a className="" href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    {/* Right */}
                    <div className="v-right">
                        <div className="v-searchBox">
                            <span className="span-search">
                                <input type="text" placeholder="What do you want to learn ?" value={""} className="search-input" />
                                <span className="icon-search">
                                    {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                            </span>
                        </div>
                        <div className="v-user">
                            <a href="/login" className="v-login">
                                Sign in
                            </a>
                            <a href="/register"><button type="button" className="v-register">
                                Register
                            </button></a>

                        </div>
                    </div>
                    {/*  */}


                </div>
            </div>
        </header>
    );
};

export default Header;