import "./css/Banner.css";
import introductionBanner from "./logo/introduction-banner.svg";
const Banner = () => {
    return (
        <div className="banner">
            <div className="layout-introduce">
                {/* CONTENT */}
                <div className="introduce-content">
                    {/* CONTENT-LEFT */}
                    <div className="introduce-left">
                        <div className="slogan">
                            Equip yourself for the future of work
                        </div>
                        <div className="description">
                            A new tool to study and practice the technical knowledge.
                        </div>
                        <div className="btn-bc">
                            <a href="/courses">
                                <button type="button" className="btn-bc-primary">
                                    Browse Courses
                                </button>
                            </a>

                        </div>
                    </div>
                    {/* CONTENT-RIGHT */}
                    <div className="introduce-right">
                        <img src={introductionBanner} alt="Introduction Banner" className="svg-image" />
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Banner;