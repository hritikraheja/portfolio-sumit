import React, { useEffect, useState } from "react";
import "../css/Experience.css";
import swiggyLogo from "../assets/swiggyLogo.png";
import foresightLogo from "../assets/foresightLogo.png";
import cafaekLogo from "../assets/cafaekLogo.png";
import seekhleLogo from "../assets/seekhleLogo.png";
import gkmtLogo from "../assets/gkmtLogo.png";
import arrowToRightDark from "../assets/arrowToRightDark.svg";
import arrowToRightLight from "../assets/arrowToRightLight.svg";
import $ from "jquery";

const EXPERIENCE_INDEXES = {
  SWIGGY: 0,
  FORESIGHT: 1,
  CAFEAK: 2,
  SEEKHLE: 3,
  GKMT: 4,
};

const EXPERIENCE = [
  {
    companyName: "Swiggy",
    profile: "Associate Graphic Designer",
    logo: swiggyLogo,
    workingDuration: "Jun 22 - Present",
    summary:
      "In the past two years, I have worked as a Graphic Designer, Motion Graphics Designer, and Social Media Manager. Presently, I am pursuing my Bachelor's in Business Studies. My expertise in this.",
    skillsRequired: [
      "BANNER DESIGN",
      "MARKETING DESIGN",
      "BRAND IDENTITY",
      "PRODUCT MARKETING",
    ],
  },
  {
    companyName: "Foresight India",
    profile: "Graphic Designer & Social Media Manager",
    logo: foresightLogo,
    workingDuration: "Feb 22 - May 22",
    summary:
      "In the past two years, I have worked as a Graphic Designer, Motion Graphics Designer, and Social Media Manager. Presently, I am pursuing my Bachelor's in Business Studies. My expertise in this.",
    skillsRequired: [
      "WEBSITE DESIGN",
      "MEME MARKETING",
      "BRAND IDENTITY",
      "BANNER DESIGN",
    ],
  },
  {
    companyName: "Cafeak Services",
    profile: "Graphic Designer & Social Media Manager",
    logo: cafaekLogo,
    workingDuration: "Nov 21 - Mar 22",
    summary:
      "In the past two years, I have worked as a Graphic Designer, Motion Graphics Designer, and Social Media Manager. Presently, I am pursuing my Bachelor's in Business Studies. My expertise in this.",
    skillsRequired: [
      "BANNER DESIGN",
      "MARKETING DESIGN",
      "BRAND IDENTITY",
      "MEME MARKETING",
    ],
  },
  {
    companyName: "Seekhle",
    profile: "Creator & Designer",
    logo: seekhleLogo,
    workingDuration: "May 21 - May 22",
    summary:
      "In the past two years, I have worked as a Graphic Designer, Motion Graphics Designer, and Social Media Manager. Presently, I am pursuing my Bachelor's in Business Studies. My expertise in this.",
    skillsRequired: [
      "BANNER DESIGN",
      "MEME MARKETING",
      "BRAND IDENTITY",
      "INFOGRAPHICS",
    ],
  },
  {
    companyName: "GKMT IT",
    profile: "Graphic Designer Intern",
    logo: gkmtLogo,
    workingDuration: "Sep 20 - Dec 20",
    summary:
      "In the past two years, I have worked as a Graphic Designer, Motion Graphics Designer, and Social Media Manager. Presently, I am pursuing my Bachelor's in Business Studies. My expertise in this.",
    skillsRequired: [
      "BANNER DESIGN",
      "MARKETING DESIGN",
      "LOGO DESIGN",
      "PRODUCT MARKETING",
    ],
  },
];

export const Experience = (props) => {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  useEffect(() => {
    $('#accordionBody0').show()
    $("#accordionHeader0").css({'display':'none'});
  }, [])

  async function openExperience(experienceIndex) {
    if (experienceIndex != activeExperienceIndex) {
      $("#accordionBody" + activeExperienceIndex).hide(800);
      $("#accordionBody" + experienceIndex).show(800, "swing");
      await new Promise(resolve => setTimeout(resolve, 800))
      $("#accordionHeader" + activeExperienceIndex).css({'display':'flex'});
      $("#accordionHeader" + experienceIndex).css({'display':'none'});
      setActiveExperienceIndex(experienceIndex);
    }
  }

  return (
    <div id="experience" className={(props.theme == props.THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont') + ' reveal'}>
      <p id="head">EXPERIENCE</p>
      <div id="detailsAccordion">
        {EXPERIENCE.map((val, index) => {
          return (
            <div className="accordionItem" key={index}>
              <div
                id={"accordionHeader" + index}
                className="accordionHeader"
                onClick={() => {
                  openExperience(index);
                }}
              >
                <p>{val.companyName}</p>
                <img src={props.theme == props.THEMES.DARK ? arrowToRightDark : arrowToRightLight}></img>
              </div>
              <div
                id={"accordionBody" + index}
                className={
                  activeExperienceIndex == index
                    ? "collapse accordionBody show"
                    : "collapse accordionBody"
                }
                style={{
                  display: activeExperienceIndex == index ? "block" : "none",
                }}
                data-bs-parent="detailsAccordion"
              >
                <div id="psd">
                  <div id="details">
                    <div id="nameAndLogo">
                      <p>{val.companyName}</p>
                      <img src={val.logo}></img>
                    </div>
                    <div id="profileAndDuration">
                      <p>{val.profile}</p>
                      <span>{val.workingDuration}</span>
                    </div>
                    <p id="summary">{val.summary}</p>
                  </div>
                  <div id="skillsDiv">
                    <p>SKILLS REQUIRED</p>
                    <div id="skills">
                      {val.skillsRequired.map((val, key) => {
                        return <span key={key}>{val}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
