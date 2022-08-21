import React from "react";
import './Sidebar.css'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import Bounce from 'react-reveal/Bounce';
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <Bounce left delay={1000} duration={1000} >
    <div className="sidebar">
      <div className="sidebar__links">
        <div className="sidebar__link">
          <Link to='/my-portfolio'><HomeOutlinedIcon /></Link>
        </div>
        <div className="sidebar__link">
          <Link to='/projects'><FolderOpenOutlinedIcon /></Link>
        </div>
        <div className="sidebar__link">
        <Link to='/about'><InfoOutlinedIcon /></Link>
        </div>
        {/* <div className="sidebar__link">
          <Link to='/contact'><ConnectWithoutContactOutlinedIcon /></Link>
        </div> */}
      </div>
    </div>
    </Bounce>
  );
};

export default Sidebar;
