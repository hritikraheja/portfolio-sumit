import React from "react";
import "../css/Contact.css";
import enterIcon from "../assets/enterIcon.svg";
import hireMeCircle from "../assets/hireMeCircle.svg";

function Contact(props) {
  return (
    <div id="contact">
      <p id="head">CONTACT</p>
      <div id="contactDetails">
        <div id="left">
          <p id="contactHead">
            EMAIL<img src={enterIcon}></img>
          </p>
          <p id="contactSubhead">sumitmittal2336@gmail.com</p>
          <p id="contactHead">
            BEHANCE<img src={enterIcon}></img>
          </p>
          <p id="contactSubhead">behance.net/sumitmittal1</p>
          <p id="contactHead">
            LINKEDIN<img src={enterIcon}></img>
          </p>
          <p id="contactSubhead">linkedin.com/in/sumitmittal-/</p>
          <p id="contactHead">
            INSTAGRAM<img src={enterIcon}></img>
          </p>
          <p id="contactSubhead">instagram.com/peshesedesigner/</p>
        </div>
        <div id="rightWeb">
          <p>
            Say hello! Whether it’s a chat about anything design related or a
            potential project or opportunity you may have in mind, hit me up.
          </p>
          <img src={hireMeCircle}></img>
        </div>
        <div id="rightMob">
          <img src={hireMeCircle}></img>
          <p>
            Say hello! Whether it’s a chat about anything design related or a
            potential project or opportunity you may have in mind, hit me up.
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="footerLevel1" style={{ color: "white" }}>
          <a>Home</a>
          <a>About</a>
          <a>Experience</a>
          <a>Work</a>
          <a>Contact</a>
        </div>
        <div id="footerLevel2" style={{ color: "white" }}>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-behance"></i>
          <i className="fa-brands fa-dribbble"></i>
        </div>
        <div id="footerLevel3" style={{ color: "white" }}>
          <p>&copy; 2022 Portfolio</p>
          <p>Made By Sumit Mittal</p>
          <p>&copy; All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
