import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="fixed-footer">
            <div className="footer-content">
                <div className="content-row">
                    <div className="footer-col">
                        <h4>CONTACT</h4>
                        <div className="col-contact">
                            <ul className="contact-info">
                                <li>
                                    <a href="/mailto:linhlh@hexa.vn" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            style={{ color: '#4285F4', fontSize: '20px', marginRight: '12px' }}

                                        />
                                        <span>linhlh@hexa.vn</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/hlinhle2208/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook}
                                            style={{ color: '#3B5998', fontSize: '20px', marginRight: '12px' }} />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/godzu2208" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub}
                                            style={{ color: '#333333', fontSize: '20px', marginRight: '12px' }} />
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>CONTENTS</h4>
                        <div className="col-contact">
                            <ul className="contact-info">
                                <li>
                                    <a href="/mailto:linhlh@hexa.vn" target="_blank" rel="noopener noreferrer">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/hlinhle2208/" target="_blank" rel="noopener noreferrer">
                                        <span>Courses</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/godzu2208" target="_blank" rel="noopener noreferrer">
                                        <span>Roadmaps</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>SERVICE</h4>
                        <div className="col-contact">
                            <ul className="contact-info">
                                <li>
                                    <a href="/mailto:linhlh@hexa.vn" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            style={{ color: '#4285F4', fontSize: '20px', marginRight: '12px' }}

                                        />
                                        <span>linhlh@hexa.vn</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/hlinhle2208/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook}
                                            style={{ color: '#3B5998', fontSize: '20px', marginRight: '12px' }} />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/godzu2208" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub}
                                            style={{ color: '#333333', fontSize: '20px', marginRight: '12px' }} />
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>TERMS & CONDITIONS</h4>
                        <div className="col-contact">
                            <ul className="contact-info">
                                <li>
                                    <a href="/mailto:linhlh@hexa.vn" target="_blank" rel="noopener noreferrer">
                                        <span>Support</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/hlinhle2208/" target="_blank" rel="noopener noreferrer">
                                        <span>Terms</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/godzu2208" target="_blank" rel="noopener noreferrer">
                                        <span>Feedback</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">

                <span>© {new Date().getFullYear()} Hexagon E-Learning. All rights reserved.</span>
            </div>

        </footer >
    );
};

export default Footer;