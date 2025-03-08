import "./css/Roadmaps.css";

const Roadmaps = () => {
    return (
        <>
            <div className="roadmaps">
                <div className="roadmaps-content">
                    <div className="heading">
                        Popular Roadmaps
                    </div>
                    <div className="roadmaps-content-list">
                        <div className="list-flex">
                            <div className="roadmap-items">
                                <div className="roadmap-item-content be">
                                    <div className="text">
                                        Backend Developer
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-items">
                                <div className="roadmap-item-content fe">
                                    <div className="text">
                                        Frontend Developer
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-items">
                                <div className="roadmap-item-content devops">
                                    <div className="text">
                                        DevOps Engineer
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-items">
                                <div className="roadmap-item-content whitehat">
                                    <div className="text">
                                        White hat
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-items">
                                <div className="roadmap-item-content webs">
                                    <div className="text">
                                        Web Security
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-items">
                                <div className="roadmap-item-content bc">
                                    <div className="text">
                                        Blockchain Engineer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Roadmaps;