import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.svg"

const About = () => {
  return (
    <div className="about">
        <h1 className="about__title">About Me</h1>
      <div className="about__box">
        <div className="about__left">
          <p className="about__details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam
            nobis nostrum aliquam excepturi accusamus tenetur, libero, corrupti
            recusandae, soluta quas maxime porro mollitia voluptatem laborum
            eligendi laboriosam distinctio impedit tempore labore officia? Vel!
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
