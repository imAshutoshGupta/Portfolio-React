import React, { useEffect, useState } from "react";
import {  Fade } from "react-awesome-reveal";
import AnimatedLettersFast from "../RuberBand/RubberBand";
import "./Contact.css";
const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const getInTouch = "Get In Touch".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });


  return (
    <section>
      <div id="contact" className="contact-container">
        <p className="intro-intro">
          <span>04.</span> What’s Next?
        </p>
        <Fade>

        <h2>
        <AnimatedLettersFast
            letterClass={letterClass}
            strArray={getInTouch}
            idx={15}
            />
          </h2>
            </Fade>
        <p className="contact-des">
        I’m on the lookout for new opportunities, and my inbox is as open as my browser tabs! Got a question or just want to chat? Drop me a line—I promise to respond faster than a compiler!
        </p>
        <a href="mailto:aguptaworkspace@gmail.com">
       <Fade> <h3 className="intro-button contact-btn">Say Hello !</h3></Fade> </a>
       </div>
    </section>
  );
};

export default Contact;
