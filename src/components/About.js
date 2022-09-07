import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.svg";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__box">
        <div className="about__left">
          <p className="about__details">
            My name is Gener Maloto, looking for a position to kickstart my
            career in the field of Web Development. Have a Degree of Bachelor of
            Science in Information Technology from Laguna State Polytechnic
            University. My goal is to become associated with a company where I
            can utilize my skills and gain further experience while enhancing
            the company’s productivity and reputation.
          </p>
        </div>
        <div className="about__right">
          <img className="about__image" src={aboutImage} alt="asdasdsa" />
        </div>
      </div>
    </div>
  );
};

export default About;
