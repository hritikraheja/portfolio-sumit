import React, { useState } from "react";
import "../css/Work.css";
import "animate.css";
import WorkSamples from "../assets/WorkSamples";

export const Work = (props) => {
  const WORK_INDEXES = {
    WEBSITE_DESIGN: 0,
    IN_APP_MARKETING: 1,
    BRAND_IDENTITY: 2,
    FREELANCE_PROJECTS: 3,
  };

  const [activeIndex, setActiveIndex] = useState(WORK_INDEXES.WEBSITE_DESIGN);

  const WORK = [
    [
      {
        name: "Foresight Opinion Trading",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign1,
      },
      {
        name: "Foresight Crypto Trading",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign2,
      },
      {
        name: "Pose it Perfect Analyzer",
        type: "Website Design",
        year: "2021",
        image: WorkSamples.websiteDesign3,
      },
      {
        name: "Graphic Design Portfolio",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign4,
      },
    ],
    [
      {
        name: "Swiggy Instamart D2C Hipstreet",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing1,
      },
      {
        name: "Swiggy Mega Saving Festival",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing2,
      },
      {
        name: "Swiggy Instamart Diwali Payday",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing3,
      },
      {
        name: "Swiggy Instamart Strawberry",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing4,
      },
    ],
    [
      {
        name: "Swiggy Instamart D2C Hipstreet",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity1,
      },
      {
        name: "Swiggy Mega Saving Festival",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity2,
      },
      {
        name: "Swiggy Instamart Diwali Payday",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity3,
      },
      {
        name: "Swiggy Instamart Strawberry",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity4,
      },
      {
        name: "Swiggy Instamart Guru Nanak Jayanti",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity5,
      },
      {
        name: "Swiggy Instamart Kartik Purnima",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.brandIdentity6,
      },
    ],
    [
      {
        name: "Tara Indepay Appstore",
        type: "Overview Screenshots",
        year: "2022",
        image: WorkSamples.freelanceProjects1,
      },
      {
        name: "Foresight Appstore",
        type: "Overview Screenshots",
        year: "2022",
        image: WorkSamples.freelanceProjects2,
      },
      {
        name: "Josh Talks Pitch Deck",
        type: "Presentation Design",
        year: "2022",
        image: WorkSamples.freelanceProjects3,
      },
      {
        name: "Freelance Clients",
        type: "Print Design",
        year: "2022",
        image: WorkSamples.freelanceProjects4,
      },
    ],
  ];

  function changeActiveIndex(newIndex) {
    if (activeIndex != newIndex) {
      setActiveIndex(newIndex);
      document.getElementById("workContent").className = "fadeInRightAnimation";
      setTimeout(() => {
        document.getElementById("workContent").className = "";
      }, 500);
    } else {
      document.getElementById("workContent").className =
        "animate__animated animate__rubberBand";
      setTimeout(() => {
        document.getElementById("workContent").className = "";
      }, 800);
    }
  }

  let activeNavItemStyle = {
    fontWeight: "500",
    transform: "scaleY(1.5)",
    cursor: "default",
  };

  return (
    <div
      id="work"
      className={
        (props.theme == props.THEMES.DARK ? "darkThemeFont" : "lightThemeFont") + " reveal"
      }
    >
      <p id="head">WORK</p>
      <div id="navAndContent">
        <div id="nav">
          <p
            style={activeIndex == 0 ? activeNavItemStyle : {}}
            onClick={() => {
              changeActiveIndex(0);
            }}
          >
            WEBSITE DESIGN
          </p>
          <p
            style={activeIndex == 1 ? activeNavItemStyle : {}}
            onClick={() => {
              changeActiveIndex(1);
            }}
          >
            IN APP MARKETING
          </p>
          <p
            style={activeIndex == 2 ? activeNavItemStyle : {}}
            onClick={() => {
              changeActiveIndex(2);
            }}
          >
            BRAND IDENTITY
          </p>
          <p
            style={activeIndex == 3 ? activeNavItemStyle : {}}
            onClick={() => {
              changeActiveIndex(3);
            }}
          >
            FREELANCE PROJECTS
          </p>
        </div>
        <div id="workContent">
          {WORK[activeIndex].map(({ name, type, year, image }) => {
            return (
              <div id="workEntity">
                <img src={image}></img>
                <div id="nameAndYear">
                  <p>{name}</p>
                  <span>{year}</span>
                </div>
                <p id="type">{type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
