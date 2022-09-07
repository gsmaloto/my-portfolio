import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import "./ProjectCard.css";

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
        <div className="projectCard__buttons">
          {code && (
            <a href={code} target="_blank" className="projectCard__button">
              <GitHubIcon />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" className="projectCard__button">
              <OpenInNewIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
