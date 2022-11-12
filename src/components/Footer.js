import styles from "../Styles/FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color :
                "#fff", marginRight: "2rem" }} />
                <div>
                    <p>130 Biduribulan</p>
                    <p>Bekasi.</p>
                </div>
              </div>

            <div className="phone">
            <h4>
            <FaPhone size={20} style={{color :
            "#fff", marginRight: "2rem" }} />
            0813-8448-7598
            </h4>
            </div>

            <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color :
            "#fff", marginRight: "2rem" }} />
            hibatullahfarhan4@gmail.com
            </h4>
            
        </div>
        </div>
        
        <div className="right">
              <h4>THANKS</h4>
              <p>For coming to my website</p>
        

        <div className="sosial">
        <a href="https://www.facebook.com/farhan.hibatullah.585/">
        <FaFacebook size={30} style={{color :
          "#fff", marginRight: "1rem" }}/></a>
        <a href="https://twitter.com/frhn_hbtlh">
        <FaTwitter size={30} style={{color :
          "#fff", marginRight: "1rem" }}/></a>
        <a href="https://github.com/BangHann">
        <FaGithub size={30} style={{color :
          "#fff", marginRight: "1rem" }}/></a>
        </div>
        </div>
    </div>
    </div>
    
  );
};

export default Footer
