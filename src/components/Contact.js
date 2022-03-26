import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  // FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
                  
            <div className="col-6">
              <div className="contactSection-logo">
                  <h1 className="mainHeader">Contact Me</h1>
              </div>
              
              <ul className="contactCircles">
                <li>
                  <a href="https://www.facebook.com/theanuragkumarofficial"><FaFacebookF className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/Anuragk60343012"><FaTwitter className="headerIcon" /> </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/theanuragkumar/"><FaLinkedin className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anuragkumarofficial/"><FaInstagram className="headerIcon" /></a>
                </li>
              </ul>
              <br></br>
              <p id="footer-content">
                Copyright © 2022 Anurag Kumar | Powered by The Anurag
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
