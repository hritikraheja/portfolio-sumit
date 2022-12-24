import React from "react";
import "../css/About.css";

function About(props) {
  return (
    <div
      id="about"
      className={
        (props.theme == props.THEMES.DARK
          ? "darkThemeFont"
          : "lightThemeFont") + " reveal"
      }
    >
      <p id="head">ABOUT</p>
      <div id="profile">
        <div id="basicsDiv">
          <p id="hello">
            HELLO, I'M<br></br>SUMIT MITTAL
          </p>
          <div id="detailsDiv">
            <p id="web">22</p>
            <p id="web">BASED IN AGRA, INDIA</p>
            <p id="mobile">22, AGRA, INDIA</p>
            <p>DESIGNER AT SWIGGY</p>
            <p id="web">BACHELORS IN BUSINESS</p>
            <p id="mobile">BACH'S IN BUSINESS</p>
            <p>ENGLISH, HINDI</p>
          </div>
        </div>
        <div id="summaryDiv">
          <p id="summary">
            It has been almost three years since I started my journey in the
            design field. Adapting to market needs has always been my top
            priority. I have demonstrated my design skills in a variety of
            sectors, such as marketing, finance, and IT. Presently at Swiggy, I
            have delivered 10+ successful campaigns for Swiggy Instamart, that
            created a millions impressions. Currently, I’m venturing into the
            UI/UX space, and have a relative experience of curating handful
            website prototypes that are now live.
          </p>
        </div>
      </div>
      <div id="otherThings" className="reveal">
        <div id="section">
          <p
            id="sectionHead"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeHeadFont"
                : "lightThemeHeadFont"
            }
          >
            HOBBIES
          </p>
          <p id="sectionSubhead">DESIGNING</p>
          <p id="sectionSubhead">TRAVELLING</p>
          <p id="sectionSubhead">TECH ENTHUSIAST</p>
          <p id="sectionSubhead">EQUITY MARKET</p>
          <p id="sectionSubhead">MEMES</p>
        </div>

        <div id="section">
          <p
            id="sectionHead"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeHeadFont"
                : "lightThemeHeadFont"
            }
          >
            SERVICES
          </p>
          <p id="sectionSubhead">WEBSITE DESIGN</p>
          <p id="sectionSubhead">UI/UX DESIGN</p>
          <p id="sectionSubhead">BRAND IDENTITY</p>
          <p id="sectionSubhead">MARKETING DESIGN</p>
          <p id="sectionSubhead">PRINT DESIGN</p>
        </div>

        <div id="section">
          <p
            id="sectionHead"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeHeadFont"
                : "lightThemeHeadFont"
            }
          >
            SKILLS
          </p>
          <p id="sectionSubhead">CREATIVITY</p>
          <p id="sectionSubhead">TYPOGRAPHY</p>
          <p id="sectionSubhead">MARKETING</p>
          <p id="sectionSubhead">BRANDING</p>
          <p id="sectionSubhead">COLLABORATION</p>
        </div>

        <div id="section">
          <p
            id="sectionHead"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeHeadFont"
                : "lightThemeHeadFont"
            }
          >
            SOFTWARES
          </p>
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
            <span>90%</span>
          </div>
          <div id="sectionSubhead">
            <p>AUDITION</p>
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
