import React from "react";
import { TypeAnimation } from 'react-type-animation';
import videoBG from "../assets/ReefBackground.mp4"
import Photo from "../assets/Seth.jpg"

const Main = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted/>
            <div className="content">
            <TypeAnimation
                sequence={[
                    'Hi',
                    1000,
                    'My Name Is Jonathan.',
                    1000,
                    'I am a Junior Frontend Web Developer from Middle Tennessee.',
                    1000,
                    'Welcome to my Portfolio.',
                    1000
                ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
            />
            <div className="Photo">
                <img src={Photo} alt="Avatar"/>
            </div>
            </div>
        </div>
    );
};

export default Main;