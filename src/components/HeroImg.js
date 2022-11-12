import React from 'react'

import styles from "../Styles/HeroImgStyle.css";
import IntroImg from "../assets/Intro-bg.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} 
            alt="IntroImg "/>
        </div>
        <div className="content">
        <p>HI, I'M FARHAN</p>
        <h1>I make websites.
        </h1>
        <div>
            <Link to="/project"
            className="btn">Project</Link>
            <Link to="/contact"
            className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg