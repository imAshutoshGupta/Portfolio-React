import React from "react";
import { Fade } from "react-awesome-reveal";
import profile from "../../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <div>
      <div className="about-main">
        <div className="about-main-left">
          <div className="about-main-left-top">
            <Fade direction="up" damping={0.2} duration="400" cascade>
              <p>
              My name is <Link>Ashutosh Gupta</Link>, a programmer who loves turning coffee (or snacks) into sleek, functional applications. With a knack for <Link>MERN</Link> stack, I tackle complex problems like a digital superhero—cape not included. </p>
              <p>
              When I'm not coding, you can find me lost in <Link>tech blogs</Link>, trying to remember where I put my keys, or engaged in a fierce battle against bugs (both in my <Link>code</Link> and my garden). Let’s connect and create something awesome—preferably without too many bugs!
              </p>
              <p>
                Here are a few <Link>technologies</Link> I’ve been working with recently:
              </p>
            </Fade>
          </div>
          <Fade direction="up" damping={0.2} duration="400" cascade>
            <div className="about-main-left-buttom">
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>Node JS</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Express</li>
                <li>Django</li>
                <li>Html</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
          </Fade>
        </div>
        <div className="about-main-right">
          <Fade>
            <div className="about-image-cover">
              <img className="about-main-right-image" src={profile} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
