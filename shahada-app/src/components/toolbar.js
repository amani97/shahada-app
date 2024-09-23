import React from "react";
import SearchIcon from "../assets/Icon.svg";

function Toolbar() {

  return (
    <div className="Toolbar">
      <h1>SHAHADA</h1>
      <div className="NavItems">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>

      <img src={SearchIcon} alt="Search" />
      
    </div>
  );
}

export default Toolbar;
