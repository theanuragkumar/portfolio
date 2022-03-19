import React from "react";
import {Link} from 'react-scroll'
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {

  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">

              <li>
              <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
              </li>
              <li>
              <Link  to="projects" spy={true} smooth={true}>Projects</Link>
              </li>
              <li>
              <Link  to="about" spy={true} smooth={true}>About</Link>
              </li>
              <li>
              <Link  to="skills" spy={true} smooth={true}>Skills</Link>
              </li>
              <li>
              <Link  to="contact" spy={true} smooth={true}>Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
