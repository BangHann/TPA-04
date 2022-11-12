import styles from "../Styles/AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <h1>Who Am I?</h1>
        <p>A young muslim with critical thinking and leadership skills who is very interested in programming, 
        I am still learning now but being an expert programmer is my life goal</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
  )
};

export default AboutContent;