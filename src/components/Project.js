import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import Jump from "react-reveal/Jump";
import movieWorld from '../assets/movieWorld.jpg'

const Project = () => {
  return (
    <div className="project">
      <h1 className="project__title">My Projects</h1>
      <div className="project__box">
        <Jump>
          <ProjectCard
            title="Random Advice Generator"
            image={require("../assets/random-advice.jpg")}
            description="ldjhaksjdhaksghdkajshdkjh"
            tech="HTML - CSS - Javascript"
            code="https://www.google.com/"
            demo="https://randomadvicee.netlify.app/"
          />
        </Jump>
        <Jump delay={200}>
          <ProjectCard
            title="Movie World"
            image={movieWorld}
            description="This is my first project using react. I used OMDB API for the movies."
            tech='HTML - CSS - ReactJS'
            code="https://www.google.com/"
            demo="https://www.youtube.com/"
          />
        </Jump>
      </div>
    </div>
  );
};

export default Project;
