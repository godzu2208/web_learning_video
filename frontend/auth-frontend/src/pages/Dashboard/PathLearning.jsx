import "./css/PathLearning.css"
import logoHexa from "./logo/logo.png"
import polygonOrange from "./logo/polygon-learning-path-orange.svg"
import polygonRed from "./logo/polygon-learning-path-red.svg"
const PathLearning = () => {
    return (
        <>
            <div className="path-learning">
                <div className="path-learning-content">
                    <img className="logo" src={logoHexa} alt="Logo">
                    </img>
                    <div className="text">
                        Don't know where to start ?
                    </div>
                    <div className="description">
                        You can see the roadmap as our reference for your career path below
                    </div>
                    <a href="/roadmap" target="_blank" className="link-roadmap">
                        <button type="button" className="v-button">
                            Get A Learning Path Here !
                        </button>
                    </a>
                    <div className="path-learning-content-left">
                        <img src={polygonOrange} alt="" className="polygon-orange" />
                        <img src={polygonRed} alt="" className="polygon-red" />
                    </div>
                    <div className="path-learning-content-right">
                        {/* set bg */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default PathLearning;
