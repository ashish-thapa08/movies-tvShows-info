import React from 'react'
var scrollToElement = require('scroll-to-element');
export default function Welcome() {
    let Profile = () => {
        scrollToElement('.profilee', {
            offset: 0,
            ease: 'out-bounce',
            duration: 1500
        });
    }
    let Artist = () => {
        scrollToElement('.artist', {
            offset: 0,
            ease: 'out-bounce',
            duration: 1500
        });
    }
    return (
        <>
            <div id="video-container">
                <video src="./video/videoplayback.mp4" autoPlay loop muted />
                <div className="yoo">
                    <div className="text-center">
                        <h2 className="text-white welc">Welcome to Brave Girls Community</h2>
                        <div className=""><button onClick={Artist} className="btn yo btn-outline-light ">Artist Bio</button> <span><button onClick={Profile} className=" yo btn btn-light ml-3">Our Profile</button></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
