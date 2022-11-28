import React from "react";
import "../css/Home.css";
import enterIcon from "../assets/enterIcon.svg";
import hireMeCircle from "../assets/hireMeCircle.svg";

export const Home = (props) => {
  return (
    <div id="home">
      <p id="name">SUMIT MITTAL</p>
      <p id="head">
        I <span>CREATE</span> DESIGNS<br></br>
        THAT ARE HARD TO<br></br>
        IGNORE <img src={enterIcon}></img>
      </p>
      <div id="section">
        <div id="division">
          <img src={hireMeCircle}></img>
        </div>
        <div id="division">
          <div id="socialMedia">
            <p>BEHANCE</p>
            <p>LINKED</p>
            <p>INSTAGRAM</p>
          </div>
        </div>
        <div id="division">
          <div id="bio">
            <p>GRAPHIC DESIGNER</p>
            <p>UI/UX DESIGNER (ASPIRING)</p>
            <p>2 YEARS OF EXPERIENCE</p>
            <p>DESIGNER AT SWIGGY</p>
            <p>BASED IN AGRA, INDIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};
