import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Anurag Kumar",
    text:
      "Full Stack Java Developer​ having hands on experience in Spring, Spring Boot, MicroService, Rest Api, HTML, CSS, JavaScript, React Js. ",
    image: "/images/anu.png",
  });
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="row">

  
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
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
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.youtube.com/channel/UChWfbgnmq70nlmBjMKl4HAg" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
