import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import movieWorld from "../assets/movieWorld.jpg";
import yt from "../assets/yt.png";
import axfitness from "../assets/axfitness.png";
import portfolio from "../assets/portfolio.png";
import todo from "../assets/todo.png";

const Project = () => {
  return (
    <div className="project">
      <h1 className="project__title">My Projects</h1>
      <div className="project__box">
        <ProjectCard
          title="Todo App"
          image={todo}
          description="This project has Facebook Authentication."
          tech="HTML - CSS - Material UI - ReactJS - Firebase"
          code="https://github.com/gsmaloto/todo-app"
          demo="https://gsmaloto.github.io/todo-app/"
        />
        <ProjectCard
          title="Simple Portfolio"
          image={portfolio}
          description="I created this portfolio to showcase my projects and skills."
          tech="HTML - CSS - Material UI - ReactJS"
          code="https://github.com/gsmaloto/my-portfolio"
        />
        <ProjectCard
          title="Random Advice Generator"
          image={require("../assets/random-advice.jpg")}
          description="I practice fetching API in this project. I used Advice Slip JSON API for the advice"
          tech="HTML - CSS - Javascript"
          code="https://github.com/gsmaloto/random-advice"
          demo="https://randomadvicee.netlify.app/"
        />
        <ProjectCard
          title="Movie World"
          image={movieWorld}
          description="This is my first project using reactJS. I used OMDB API for the movies."
          tech="HTML - CSS - ReactJS"
          code="https://github.com/gsmaloto/movie-world"
          demo="https://gsmaloto.github.io/movie"
        />
        <ProjectCard
          title="Youtube Clone"
          image={yt}
          description="This Youtube Clone is homepage UI only."
          tech="HTML - CSS - Material UI - ReactJS"
          code="https://github.com/gsmaloto/youtube-clone"
          demo="https://gsmaloto.github.io/youtube-clone/"
        />
        <ProjectCard
          title="AX Fitness Appointment and Scheduling System"
          image={axfitness}
          description="This is my Capstone Project in college. It has function of auto generate QR Code and Scanner."
          tech="HTML - CSS - Bootstrap - Javascript - MYSQL"
          code="https://github.com/gsmaloto/axfitness"
          demo=""
        />
      </div>
    </div>
  );
};

export default Project;
