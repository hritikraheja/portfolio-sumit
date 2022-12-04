import React from "react";
import "../css/Contact.css";
import enterIconDarkTheme from "../assets/enterIconDarkTheme.svg";
import hireMeCircleDarkTheme from "../assets/hireMeCircleDarkTheme.svg";
import enterIconLightTheme from "../assets/enterIconLightTheme.svg";
import hireMeCircleLightTheme from "../assets/hireMeCircleLightTheme.svg";

function Contact(props) {
  return (
    <div id="contact" className={(props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont') + " reveal"}>
      <p id="head">CONTACT</p>
      <div id="contactDetails">
        <div id="left">
          <p id="contactHead">
            EMAIL<img src={props.theme == props.THEMES.DARK ? enterIconDarkTheme : enterIconLightTheme}></img>
          </p>
          <p id="contactSubhead" className={props.theme == props.THEMES.DARK ? 'darkThemeSubHeadFont' : 'lightThemeSubHeadFont'}>sumitmittal2336@gmail.com</p>
          <p id="contactHead">
            BEHANCE<img src={props.theme == props.THEMES.DARK ? enterIconDarkTheme : enterIconLightTheme}></img>
          </p>
          <p id="contactSubhead" className={props.theme == props.THEMES.DARK ? 'darkThemeSubHeadFont' : 'lightThemeSubHeadFont'}>behance.net/sumitmittal1</p>
          <p id="contactHead">
            LINKEDIN<img src={props.theme == props.THEMES.DARK ? enterIconDarkTheme : enterIconLightTheme}></img>
          </p>
          <p id="contactSubhead" className={props.theme == props.THEMES.DARK ? 'darkThemeSubHeadFont' : 'lightThemeSubHeadFont'}>linkedin.com/in/sumitmittal-/</p>
          <p id="contactHead">
            INSTAGRAM<img src={props.theme == props.THEMES.DARK ? enterIconDarkTheme : enterIconLightTheme}></img>
          </p>
          <p id="contactSubhead" className={props.theme == props.THEMES.DARK ? 'darkThemeSubHeadFont' : 'lightThemeSubHeadFont'}>instagram.com/peshesedesigner/</p>
        </div>
        <div id="rightWeb">
          <p>
            Say hello! Whether it’s a chat about anything design related or a
            potential project or opportunity you may have in mind, hit me up.
          </p>
          <img src={props.theme == props.THEMES.DARK ? hireMeCircleDarkTheme : hireMeCircleLightTheme}></img>
        </div>
        <div id="rightMob">
          <img src={props.theme == props.THEMES.DARK ? hireMeCircleDarkTheme : hireMeCircleLightTheme}></img>
          <p>
            Say hello! Whether it’s a chat about anything design related or a
            potential project or opportunity you may have in mind, hit me up.
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="footerLevel1">
          <a href="#" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}><p>Home</p></a>
          <a href="#about" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>About</a>
          <a href="#experience" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>Experience</a>
          <a href="#work" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>Work</a>
          <a href="#contact" className={props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>Contact</a>
        </div>
        <div id="footerLevel2">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-behance"></i>
          <i className="fa-brands fa-dribbble"></i>
        </div>
        <div id="footerLevel3">
          <p>&copy; 2022 Portfolio</p>
          <p>Made By Sumit Mittal</p>
          <p>&copy; All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
