import "./css/Topic.css";
import logo1Office1 from "./logo/logo-1office.png";
import logoDA from "./logo/logo-da.png";
import logoMC from "./logo/logo-mc.png";
import logoAI from "./logo/logo-ai-agent.png";
import logoTM from "./logo/logo-tm.png";
import logoDatabase from "./logo/logo-database.png";
import logoPM from "./logo/logo-pm.png";
import logoSK from "./logo/logo-sk.png";
import logoCK from "./logo/logo-ck.png";
import logoBC from "./logo/logo-bc.png";
import logoTool from "./logo/logo-tool.png";
import logoSecurity from "./logo/logo-security.png";

const Topic = () => {

    return (
        <div className="topic-container">
            {/* Left */}
            <div className="topic-c-left"></div>
            {/* Center */}
            <div className="topic-c-center">
                <div className="heading-topic">
                    What are you looking for to learn ?
                </div>
                <p className="description-heading">
                    Topics recommended for you
                </p>
                <div className="list-topic">
                    <div className="list-content">
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        1Office
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            10 courses
                                        </p>
                                        <p className="course-item state">
                                            2 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logo1Office1} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        AI Agent
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            1 courses
                                        </p>
                                        <p className="course-item state">
                                            1 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoAI} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>

                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Meaching Learning
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            3 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoMC} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Data Analysis
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            1 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoDA} alt="1Office" className="logo-topic" />

                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Time Management
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            1 courses
                                        </p>
                                        <p className="course-item state">
                                            0 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoTM} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Project Management
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            2 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoPM} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Problem Solving Skills
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            1 courses
                                        </p>
                                        <p className="course-item state">
                                            0 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoSK} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Communication Skill
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            1 courses
                                        </p>
                                        <p className="course-item state">
                                            0 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoCK} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Database
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            1 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoDatabase} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Blockchain
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            1 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoBC} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Tools and Utilities
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            3 courses
                                        </p>
                                        <p className="course-item state">
                                            0 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoTool} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                        <div className="topic-item">
                            <div className="item-content">
                                <div className="ct-left">
                                    <div className="name-item">
                                        Security
                                    </div>
                                    <div className="state-item">
                                        <p className="course-item total">
                                            2 courses
                                        </p>
                                        <p className="course-item state">
                                            1 incomming courses
                                        </p>

                                    </div>
                                </div>
                                <div className="ct-right">
                                    <img src={logoSecurity} alt="1Office" className="logo-topic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="topic-c-right"></div>
        </div>
    );
}

export default Topic;
