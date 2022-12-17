import React, { useState } from "react";
import "../css/Work.css";
import "animate.css";

export const Work = (props) => {
  const WORK_INDEXES = {
    WEBSITE_DESIGN: 0,
    IN_APP_MARKETING: 1,
    BRAND_IDENTITY: 2,
    FREELANCE_PROJECTS: 3,
  };

  const [activeIndex, setActiveIndex] = useState(WORK_INDEXES.WEBSITE_DESIGN);

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
          {props.WORK[activeIndex].map((workEntity , index) => {
            return (
              <div id="workEntity" onClick={() => {
                props.openWorkPreviewDialog
                (WORK_INDEXES.WEBSITE_DESIGN, index)
                }}>
                <img src={workEntity.image}></img>
                <div id="nameAndYear">
                  <p>{workEntity.name}</p>
                  <span>{workEntity.year}</span>
                </div>
                <p id="type">{workEntity.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
