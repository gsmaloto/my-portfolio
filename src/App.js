import "./App.css";
import Hero from "./components/Hero";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";

import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import About from "./components/About";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="app">
      <Sidebar />
      <Routes className='app__main'>
        <Route path="/my-portfolio" element={<Hero />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <div className="app__theme" onClick={toggleTheme}>
        {!darkMode ? (
          <DarkModeOutlinedIcon className="app__dark" />
        ) : (
          <LightModeOutlinedIcon className="app__light"/>
        )}
    </div> */}

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;
