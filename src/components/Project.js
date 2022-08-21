import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import movieWorld from '../assets/movieWorld.jpg'
import yt from '../assets/yt.png'
import axfitness from '../assets/axfitness.png'

const Project = () => {
  return (
    <div className="project">
      <h1 className="project__title">My Projects</h1>
      <div className="project__box">
          <ProjectCard
            title="Random Advice Generator"
            image={require("../assets/random-advice.jpg")}
            description="ldjhaksjdhaksghdkajshdkjh"
            tech="HTML - CSS - Javascript"
            code="https://github.com/gsmaloto/random-advice"
            demo="https://randomadvicee.netlify.app/"
          />
          <ProjectCard
            title="Movie World"
            image={movieWorld}
            description="This is my first project using react. I used OMDB API for the movies."
            tech='HTML - CSS - ReactJS'
            code="https://github.com/gsmaloto/movie-world"
            demo="https://gsmaloto.github.io/movie"
          />
           <ProjectCard
            title="Youtube Clone"
            image={yt}
            description="This project is user interface and dont have a."
            tech='HTML - CSS - MaterialUI - ReactJS'
            code="https://github.com/gsmaloto/youtube-clone"
            demo="https://gsmaloto.github.io/youtube-clone/"
          />
          <ProjectCard
            title="AX Fitness Appointment and Scheduling System"
            image={axfitness}
            description="This is my first project using react. I used OMDB API for the movies."
            tech='HTML - CSS - Bootstrap - Javascript - MYSQL'
            code="https://github.com/gsmaloto/axfitness"
            demo=""
          />
      </div>
    </div>
  );
};

export default Project;
