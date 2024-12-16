import React from "react";


const Header = () => {
  return (
    <header className=" container-header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Personal Logo" className="logo-img" />
      </div>
      
      <nav className="nav">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <button className="resume-btn">Resume</button>
    </header>
  );
};

export default Header;
