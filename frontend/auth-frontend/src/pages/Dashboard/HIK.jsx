import "./css/HIK.css";
import polygonRed from "./logo/polygon-red.svg";
import polygonOrange from "./logo/polygon-orange.svg";
const HIK = () => {
    return <>
        {/* How It Work */}
        <div className="hik">
            <div className="hik-left">
                {/* set background */}
            </div>
            <div className="hik-right">
                <div className="hik-right-top">
                    <div className="polygon-red">
                        <img src={polygonRed} alt="polygon-red" />
                    </div>
                    <div className="polygon-orange">
                        <img src={polygonOrange} alt="polygon-orange" />
                    </div>
                </div>
                <div className="hik-right-center">
                    <div className="center-heading">
                        How It Work
                    </div>
                    <div className="center-content">
                        <div className="center-content-right">
                            <ul className="steps-work">
                                <li className="step">
                                    <div className="tail">
                                    </div>
                                    <div className="circle-step">
                                        <div className="circle-step-flex">
                                            <div className="circle-step-inside">
                                                <div className="circle-step-inside-content">
                                                    <div className="number">1</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-content">
                                        <div className="content-item">
                                            <div className="item-title">
                                                Self-study with suggested materials
                                            </div>
                                            <div className="description">
                                                Accomplish objectives for each course by studying through the suggested materials.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="step" >
                                    <div className="tail">
                                    </div>
                                    <div className="circle-step">
                                        <div className="circle-step-flex">
                                            <div className="circle-step-inside">
                                                <div className="circle-step-inside-content">
                                                    <div className="number">2</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-content">
                                        <div className="content-item">
                                            <div className="item-title">
                                                Achieve high position on the leaderboard
                                            </div>
                                            <div className="description">
                                                Test your ability with English or Vietnamese exams and write your name on the leaderboard.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="step step-last">
                                    {/* <div className="tail">
                                    </div> */}
                                    <div className="circle-step">
                                        <div className="circle-step-flex">
                                            <div className="circle-step-inside">
                                                <div className="circle-step-inside-content">
                                                    <div className="number">3</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-content">
                                        <div className="content-item">
                                            <div className="item-title">
                                                Get Certifate
                                            </div>
                                            <div className="description">
                                                Complete all exams and receive our certificate.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hik-right-bottom">
                    {/* set background */}

                </div>
            </div>
        </div >
    </>
}

export default HIK;
