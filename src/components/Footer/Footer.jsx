import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Fade>
        <div className="footer-text">
          <a
            className="hover-underline-animation"
            href="https://github.com/imAshutoshGupta"
          >
            Designed & Built by Ashutosh Gupta
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
