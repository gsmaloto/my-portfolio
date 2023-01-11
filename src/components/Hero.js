import React from "react";
import "./Hero.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Bounce from "react-reveal/Bounce";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <Bounce top duration={1500}>
          <h5 className="hero__greet">Hi! I am</h5>
          <h1 className="hero__name">GENER MALOTO</h1>
          <h3 className="hero__job">Web Developer</h3>
        </Bounce>
        <Bounce bottom delay={200} duration={1500}>
          <div className="hero__stacks">
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/tailwind_css.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/color/48/228BE6/firebase.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/officel/16/000000/php-logo.png"
              alt="icons"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mysql-logo.png"
              alt="icons"
            />
          </div>

          <div className="hero__socials">
            <div className="hero__social">
              <a href="https://www.facebook.com/gsmaloto">
                <FacebookOutlinedIcon />
              </a>
            </div>
            <div className="hero__social">
              <a href="https://github.com/gsmaloto">
                <GitHubIcon />
              </a>
            </div>

            <div className="hero__social">
              <a href="https://www.linkedin.com/in/gener-maloto-046002246/">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1zcEkm9O0JLXCxqp00a46rsb64B-IJe25/view?usp=sharing"
            target="_blank"
            className="hero__cv"
          >
            My Resume
          </a>
        </Bounce>
      </div>
    </div>
  );
};

export default Hero;
