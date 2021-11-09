import React from 'react'
import './Home.scss'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
    "/banner_1.jpg","https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80","/s1.jpg","/s2.jpg","/s3.jpg","/s4.jpg"
];

function Home() {
    return (
        <div className="content">
            <div className="slide-main">
                <Fade style={{ width: "100%", height: "100%" }}>
                    <div className="each-fade">
                        <img src={fadeImages[0]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[1]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[2]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[3]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[4]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[5]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[6]} />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home