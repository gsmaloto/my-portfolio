import React from "react";
import "./ProjectCard.css";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectCard = ({ title, image, description, tech, code, demo }) => {
  return (
    <div className="projectCard">
      <h3 className="projectCard__title">{title}</h3>
      <div className="projectCard__imageBox">
        <img className="projectCard__image" src={image} alt="" />
        <p className="projectCard__description">{description}</p>
      </div>
      <div className="projectCard__footer">
        <div className="projectCard__tech">
          <p>{tech}</p>
        </div>
        <a href={code} className="projectCard__button">
          <CodeIcon />
          <span>Source Code</span>
        </a>
        <a href={demo} className="projectCard__button">
          <VisibilityIcon />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
