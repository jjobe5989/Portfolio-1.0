import React from "react";
import videoBG from "../assets/ReefBackground.mp4"

const Main = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted/>
            <div className="content">
                <h1>Welcome</h1>
            </div>
        </div>
    )
}

export default Main;