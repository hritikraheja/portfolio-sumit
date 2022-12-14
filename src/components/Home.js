import React from "react";
import "../css/Home.css";
import '../css/HomeHeadAndImage.css'
import enterIconDarkTheme from "../assets/enterIconDarkTheme.svg";
import enterIconLightTheme from "../assets/enterIconLightTheme.svg";
import hireMeCircleDarkTheme from "../assets/hireMeCircleDarkTheme.svg";
import laptopBackground from '../assets/laptopBackground.svg'
import post1 from '../assets/socialMediaPosts/post1.png'
import hireMeCircleLightTheme from "../assets/hireMeCircleLightTheme.svg";

export const Home = (props) => {
  return (
    <div id="home" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>
      {/* <img id="pr" src={post1}></img> */}
      <p id="name">SUMIT MITTAL</p>
      <p id="head">
        I <span>CREATE</span> DESIGNS<br></br>
        THAT ARE HARD TO<br></br>
        IGNORE <a href="#work"><img src={props.theme == props.THEMES.DARK ? enterIconDarkTheme : enterIconLightTheme}></img></a>
      </p>
      <div id="section">
        <div id="division">
          <img src={props.theme == props.THEMES.DARK ? hireMeCircleDarkTheme : hireMeCircleLightTheme}></img>
        </div>
        <div id="division">
          <div id="socialMedia">
            <a className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              } href="https://www.behance.net/peshesedesigner" target="_blank"><span>BEHANCE</span></a>
            <a className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              } href="https://linkedin.com/in/sumitmittal-/" target="_blank"><span>LINKEDIN</span></a>
            <a className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              } href="https://instagram.com/peshesedesigner/" target="_blank"><span>INSTAGRAM</span></a>
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
