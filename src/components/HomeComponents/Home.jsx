import React from 'react'
import './Home.scss'
import { Fade } from "react-slideshow-image";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import { AiFillPlusCircle } from "react-icons/ai";

const fadeImages = [
  {
    url: "/s1.jpg"
  },
  {
    url: "/s2.jpg"
  },
  {
    url: "/s3.jpg"
  },
  {
    url: "/s4.jpg"
  },
  {
    url: "/s5.jpg"
  }
];

function Home() {
  return (
    <div className="content">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6043505553901621" crossorigin="anonymous"></script>
      </head>
      <div className="slide-main">
        <Slide style={{ width: '100%', hight: '100%' }}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <img src={fadeImage.url} />
            </div>
          ))}
        </Slide>
      </div>
      <div className="hicaps-main">
        <AiFillPlusCircle className="font-aifillplus" />
        <span className="text-span">HICAPS</span>
        <AiFillPlusCircle className="font-aifillplus" />
      </div>
      <div className="text-caps-main">
        <span className="text-caps">
          HEALTH FUND REBATE AVAILABLE
        </span>
      </div>
      <div className="text-caps-main">
        <span className="text-caps">
          (*Conditions apply)
        </span>
      </div>
      <div className="image-gif-main">
        <img className="image-gif" src="/gif-banner.jpg" alt="gif-Amara Remedial ThaiMassage" />
      </div>
    </div>
  )
}

export default Home