import React from "react";
import "../css/Contact.css";
import enterIconDarkTheme from "../assets/enterIconDarkTheme.svg";
import hireMeCircleDarkTheme from "../assets/hireMeCircleDarkTheme.svg";
import enterIconLightTheme from "../assets/enterIconLightTheme.svg";
import hireMeCircleLightTheme from "../assets/hireMeCircleLightTheme.svg";

function Contact(props) {
  return (
    <div
      id="contact"
      className={
        (props.theme == props.THEMES.DARK
          ? "darkThemeFont"
          : "lightThemeFont") + " reveal"
      }
    >
      <p id="head">CONTACT</p>
      <div id="contactDetails">
        <div id="left">
          <a
            id="contactGroup"
            href="mailto:sumitmittal2336@gmail.com"
            target="_blank"
          >
            <p
              id="contactHead"
              style={{
                color: props.theme == props.THEMES.DARK ? "white" : "#181a19",
              }}
            >
              EMAIL
              <img
                src={
                  props.theme == props.THEMES.DARK
                    ? enterIconDarkTheme
                    : enterIconLightTheme
                }
              ></img>
            </p>
            <p
              id="contactSubhead"
              className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              }
            >
              sumitmittal2336@gmail.com
            </p>
          </a>
          <a
            id="contactGroup"
            href="https://www.behance.net/peshesedesigner"
            target="_blank"
          >
            <p
              id="contactHead"
              style={{
                color: props.theme == props.THEMES.DARK ? "white" : "#181a19",
              }}
            >
              BEHANCE
              <img
                src={
                  props.theme == props.THEMES.DARK
                    ? enterIconDarkTheme
                    : enterIconLightTheme
                }
              ></img>
            </p>
            <p
              id="contactSubhead"
              className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              }
            >
              behance.net/peshesedesigner
            </p>
          </a>
          <a
            id="contactGroup"
            href="https://linkedin.com/in/sumitmittal-/"
            target="_blank"
          >
            <p
              id="contactHead"
              style={{
                color: props.theme == props.THEMES.DARK ? "white" : "#181a19",
              }}
            >
              LINKEDIN
              <img
                src={
                  props.theme == props.THEMES.DARK
                    ? enterIconDarkTheme
                    : enterIconLightTheme
                }
              ></img>
            </p>
            <p
              id="contactSubhead"
              className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              }
            >
              linkedin.com/in/sumitmittal-/
            </p>
          </a>
          <a
            id="contactGroup"
            href="https://instagram.com/peshesedesigner/"
            target="_blank"
          >
            <p
              id="contactHead"
              style={{
                color: props.theme == props.THEMES.DARK ? "white" : "#181a19",
              }}
            >
              INSTAGRAM
              <img
                src={
                  props.theme == props.THEMES.DARK
                    ? enterIconDarkTheme
                    : enterIconLightTheme
                }
              ></img>
            </p>
            <p
              id="contactSubhead"
              className={
                props.theme == props.THEMES.DARK
                  ? "darkThemeSubHeadFont"
                  : "lightThemeSubHeadFont"
              }
            >
              instagram.com/peshesedesigner/
            </p>
          </a>
        </div>
        <div id="rightWeb">
          <p>
            Say hello! Whether it’s a chat about design or a potential project,
            you may have in mind, hit me up.<br></br><br></br>Or just skip the queue- 
            <strong>+91 7983497380</strong>
          </p>
          <img
            src={
              props.theme == props.THEMES.DARK
                ? hireMeCircleDarkTheme
                : hireMeCircleLightTheme
            }
          ></img>
        </div>
        <div id="rightMob">
          <img
            src={
              props.theme == props.THEMES.DARK
                ? hireMeCircleDarkTheme
                : hireMeCircleLightTheme
            }
          ></img>
          <p>
          Say hello! Whether it’s a chat about design or a potential project,
            you may have in mind, hit me up.<br></br><br></br>Or just skip the queue- <br></br>
            <strong>+91 7983497380</strong>
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="footerLevel1">
          <a
            href="#"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeFont"
                : "lightThemeFont"
            }
          >
            <p>Home</p>
          </a>
          <a
            href="#about"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeFont"
                : "lightThemeFont"
            }
          >
            About
          </a>
          <a
            href="#experience"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeFont"
                : "lightThemeFont"
            }
          >
            Experience
          </a>
          <a
            href="#work"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeFont"
                : "lightThemeFont"
            }
          >
            Work
          </a>
          <a
            href="#contact"
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeFont"
                : "lightThemeFont"
            }
          >
            Contact
          </a>
        </div>
        <div id="footerLevel2">
          <a
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeSubHeadFont"
                : "lightThemeSubHeadFont"
            }
            href="https://linkedin.com/in/sumitmittal-/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeSubHeadFont"
                : "lightThemeSubHeadFont"
            }
            href="https://instagram.com/peshesedesigner/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeSubHeadFont"
                : "lightThemeSubHeadFont"
            }
            href="https://twitter.com/dungeon_mastor/"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeSubHeadFont"
                : "lightThemeSubHeadFont"
            }
            href="https://www.behance.net/peshesedesigner"
            target="_blank"
          >
            <i className="fa-brands fa-behance"></i>
          </a>
          <a
            className={
              props.theme == props.THEMES.DARK
                ? "darkThemeSubHeadFont"
                : "lightThemeSubHeadFont"
            }
            href="https://dribbble.com/dungeon_Mastor"
            target="_blank"
          >
            <i className="fa-brands fa-dribbble"></i>
          </a>
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
