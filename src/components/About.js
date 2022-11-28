import React from "react";
import "../css/About.css";
import scrollToTopButton from '../assets/scrollToTopButton.svg'

function About() {
  return (
    <div id="about">
      <p id="head">ABOUT</p>
      <div id="profile">
        <div id="basicsDiv">
          <p id="hello">
            HELLO, I'M<br></br>SUMIT MITTAL
          </p>
          <div id="detailsDiv">
            <p id="web">22</p>
            <p id ="web">AGRA, INDIA</p>
            <p id="mobile">22, AGRA, INDIA</p>
            <p>DESIGNER AT SWIGGY</p>
            <p>BACHELORS IN BUSINESS</p>
            <p>ENGLISH, HINDI</p>
          </div>
        </div>
        <div id="summaryDiv">
          <p id="summary">
            In the past two years, I have worked as a Graphic Designer, Motion
            Graphics Designer, and Social Media Manager. Presently, I am
            pursuing my Bachelor's in Business Studies. My expertise in this
            field is intermediate, but I am full of potential. I'm creative and
            eager to learn new things, and my resume includes quite a few recent
            projects. As a result of doing freelance work for some of my
            clients, I have improved my skills.
          </p>
          <img src={scrollToTopButton} id='scrollToTopButtonWeb'></img>
        </div>
      </div>
      <div id='otherThings'>
        <div id="section">
            <p id="sectionHead">HOBBIES</p>
            <p id="sectionSubhead">DESIGNING</p>
            <p id="sectionSubhead">TRAVELLING</p>
            <p id="sectionSubhead">TECH ENTHUSIAST</p>
            <p id="sectionSubhead">EQUITY MARKET</p>
            <p id="sectionSubhead">MEMES</p>
        </div>

        <div id="section">
            <p id="sectionHead">SERVICES</p>
            <p id="sectionSubhead">WEBSITE DESIGN</p>
            <p id="sectionSubhead">UI/UX DESIGN</p>
            <p id="sectionSubhead">BRAND IDENTITY</p>
            <p id="sectionSubhead">MARKETING DESIGN</p>
            <p id="sectionSubhead">PRINT DESIGN</p>
        </div>

        <div id="section">
            <p id="sectionHead">SKILLS</p>
            <p id="sectionSubhead">CREATIVITY</p>
            <p id="sectionSubhead">TYPOGRAPHY</p>
            <p id="sectionSubhead">MARKETING</p>
            <p id="sectionSubhead">BRANDING</p>
            <p id="sectionSubhead">COLLABORATION</p>
        </div>

        <div id="section">
            <p id="sectionHead">SOFTWARES</p>
            <div id="sectionSubhead">
                <p>PHOTOSHOP</p>
                <span>80%</span>
            </div>
            <div id="sectionSubhead">
                <p>ILLUSTRATOR</p>
                <span>90%</span>
            </div>
            <div id="sectionSubhead">
                <p>AFTER EFFECTS</p>
                <span>70%</span>
            </div>
            <div id="sectionSubhead">
                <p>FIGMA</p>
                <span>80%</span>
            </div>
        </div>
      </div>
      <img src={scrollToTopButton} id='scrollToTopButtonMobile'></img>
    </div>
  );
}

export default About;
