import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import darkBackground from "../assets/Noise.png";
import { Home } from "../components/Home";
import About from "./About";
import { Experience } from "./Experience";
import SocialMediaPosts from "./SocialMediaPosts";
import starDarkTheme from "../assets/starDarkTheme.svg";
import lineShapeDarkTheme from "../assets/lineShapeDarkTheme.svg";
import starLightTheme from "../assets/starLightTheme.svg";
import lineShapeLightTheme from "../assets/lineShapeLightTheme.svg";
import themeChangeButtonDarkTheme from '../assets/themeChangeButton_darkTheme.svg'
import themeChangeButtonLightTheme from '../assets/themeChangeButton_lightTheme.png'
import pesheSeDesignerDarkTheme from "../assets/pesheSeDesignerDarkTheme.svg";
import pesheSeDesignerLightTheme from "../assets/pesheSeDesignerLightTheme.svg";
import scrollToTopButtonDark from '../assets/scrollToTopButtonDark.svg'
import scrollToTopButtonLight from '../assets/scrollToTopButtonLight.svg'
import Cookies from "universal-cookie";

import Marquee from "react-fast-marquee";
import { Work } from "./Work";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import 'animate.css'

function App() {

  const THEMES = {
    LIGHT : 0,
    DARK : 1
  }
  const [theme, setTheme] = useState(THEMES.DARK)
  const [loaded, setLoaded] = useState(false)
  const COOKIES = new Cookies()

  useEffect(() => {
    if(COOKIES.get('theme')){
      setTheme(COOKIES.get('theme'))
    }
    setLoaded(true)
  }, [])

  function changeTheme(newTheme){
    setTheme(newTheme)
    document.getElementById('themeChangeMask').style.display = 'block'
    COOKIES.set('theme', newTheme)
    setTimeout(() => {
      document.getElementById('themeChangeMask').style.display = 'none'
    }, 800)
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal)
  reveal()

  window.onscroll = function() {
    scrollFunction()
  }

  function scrollFunction(){
    let btn = document.getElementById('scrollToTopButton');
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  return (
    <div
    className={theme == THEMES.DARK ? 'darkThemeFont App' : 'lightThemeFont App'}
    style={{display : loaded ? 'block' : 'none'}}>
      {
        theme == THEMES.DARK ? <img id="darkBackground" src={darkBackground}></img>
        : <div id="lightBackground"></div>
      }
      <div id="content" className={theme == THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}>
        <nav>
          <a href="#about" className={theme == THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}><p>ABOUT</p></a>
          <a href="#experience" className={theme == THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}><p>EXPERIENCE</p></a>
          <a href="#work" className={theme == THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}><p>WORK</p></a>
          <a href="#contact" className={theme == THEMES.DARK ? 'darkThemeFont' : 'lightThemeFont'}><p>CONTACT</p></a>
          {theme == THEMES.DARK ? 
          <img src={themeChangeButtonDarkTheme} onClick={() => changeTheme(THEMES.LIGHT)}></img> : 
          <img src={themeChangeButtonLightTheme} onClick={() => changeTheme(THEMES.DARK)}></img>}
        </nav>
        <Home theme={theme} THEMES = {THEMES}></Home>
        <Marquee
          className="reveal"
          gradient={false}
          direction="right"
          speed={12}
          children={
            <div id='psd' className={theme == THEMES.DARK ? 'backgroundLight' : 'backgroundDark'}>
              {[...Array(12)].map((n, key) => {
                return <img src={theme == THEMES.DARK ? pesheSeDesignerDarkTheme : pesheSeDesignerLightTheme} key={key}></img>
              })}
            </div>
          }
        ></Marquee>
        <About theme={theme} THEMES = {THEMES}></About>
        <div id="starAndExperience">
          <Experience theme={theme} THEMES = {THEMES}></Experience>
          <img id="sideStar" src={theme == THEMES.DARK ? starDarkTheme : starLightTheme}></img>
        </div>
        <div id="lineAndWork">
          <Work theme={theme} THEMES = {THEMES}></Work>
          <img id="lineShape" src={theme == THEMES.DARK ? lineShapeDarkTheme : lineShapeLightTheme}>
          </img>
        </div>
      <SocialMediaPosts></SocialMediaPosts>
        <Contact theme={theme} THEMES = {THEMES}></Contact>
      </div>
      <div id="scrollToTopButton">
        <a href="#"><img className={theme == THEMES.DARK ? 'buttonBackgroundDark' : 'buttonBackgroundLight'} src={theme == THEMES.DARK ? scrollToTopButtonDark : scrollToTopButtonLight}></img></a>
      </div>
      <div id="themeChangeMask" className="animate__animated animate__fadeIn animate__fadeOut">
      {theme == THEMES.DARK ? <img id="darkBackground" src={darkBackground}></img>
        : <div id="lightBackground"></div>}
      </div>
    </div>
  );
}

export default App;