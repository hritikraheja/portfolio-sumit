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
import themeChangeButtonDarkTheme from "../assets/themeChangeButton_darkTheme.svg";
import themeChangeButtonLightTheme from "../assets/themeChangeButton_lightTheme.png";
import pesheSeDesignerDarkTheme from "../assets/pesheSeDesignerDarkTheme.svg";
import pesheSeDesignerLightTheme from "../assets/pesheSeDesignerLightTheme.svg";
import scrollToTopButtonDark from "../assets/scrollToTopButtonDark.svg";
import scrollToTopButtonLight from "../assets/scrollToTopButtonLight.svg";
import foresightWebDesign from "../assets/websiteDesigns/foresightWebDesign.png";
import foresightMobDesign from "../assets/websiteDesigns/foresightMobDesign.png";
import mobileFrame from "../assets/mobileFrame.svg";
import post1 from "../assets/socialMediaPosts/post1.png";
import Cookies from "universal-cookie";
import Marquee from "react-fast-marquee";
import { Work } from "./Work";
import { WEB_DESIGNS } from "../assets/WebDesigns";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import "animate.css";
import ReactLoading from "react-loading";
import WorkSamples from "../assets/WorkSamples";
import { FREELANCE_PROJECTS_SLIDES } from "../assets/FreelanceProjectsSlides";
import YouTubePlayer from "react-youtube";
import WORK_SAMPLES from "../assets/WorkSamples";

function App() {
  const THEMES = {
    LIGHT: 0,
    DARK: 1,
  };

  const WORK_PREVIEWS = {
    WEBSITE_DESIGN: 0,
    IN_APP_MARKETING: 1,
    BRAND_IDENTITY: 2,
    FREELANCE_PROJECTS: 3,
    VIDEOGRAPHY : 4
  };

  const [theme, setTheme] = useState(THEMES.DARK);
  const [loaded, setLoaded] = useState(false);
  const [sliderImageDialogOpen, setSliderImageDialogOpen] = useState(false);
  const [sliderImageDialogSrc, setSliderImageDialogSrc] = useState(post1);
  const [websitePreviewDialogOpen, setWebsitePreviewDialogOpen] =
    useState(false);
  const [websitePreviewWebImgSrc, setWebsitePreviewWebImgSrc] =
    useState(foresightWebDesign);
  const [websitePreviewWebMobSrc, setWebsitePreviewMobImgSrc] =
    useState(foresightMobDesign);
  const [freelanceProjectsSlideIndex, setFreelanceProjectsSlideIndex] =
    useState(0);
  const [freelanceProjectSlides, setFreelanceProjectSlides] = useState([]);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const COOKIES = new Cookies();
  const [videoPlayerDialogOpen, setVideoPlayerDialogOpen] = useState(false)
  const [videoPlayerVideoId, setVideoPlayerVideoId] = useState('')
  const [brandIdentityPreviewDialogImg, setBrandIdentityPreviewDialogImg] = useState('')
  const [brandIdentityPreviewDialogGif, setBrandIdentityPreviewDialogGif] = useState('')
  const [brandIdentityPreviewDialogOpen, setBrandIdentityPreviewDialogOpen] = useState(false)

  useEffect(() => {
    if (COOKIES.get("theme")) {
      setTheme(COOKIES.get("theme"));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (freelanceProjectSlides.length != 0) {
      document.getElementById("websitePreviewMobImg").style.display = "none";
      setTimeout(() => {
        document.getElementById("websitePreviewMobImg").style.display = "block";
      }, 1);
      setWebsitePreviewMobImgSrc(
        freelanceProjectSlides[freelanceProjectsSlideIndex]
      );
    }
  }, [freelanceProjectsSlideIndex, freelanceProjectSlides]);

  const WORK = [
    [
      {
        name: "Eulify Benepik LLC",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign1,
        webDesign: WEB_DESIGNS.EULIFY.webDesign,
        mobDesign: WEB_DESIGNS.EULIFY.mobDesign,
        hasMobileDesign: false,
      },
      {
        name: "Foresight Crypto Trading",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign2,
        webDesign: WEB_DESIGNS.FORESIGHT_CRYPTO.webDesign,
        mobDesign: WEB_DESIGNS.FORESIGHT_CRYPTO.mobDesign,
        hasMobileDesign: true,
      },
      {
        name: "Foresight Opinion Trading",
        type: "Website Design",
        year: "2022",
        image: WorkSamples.websiteDesign3,
        webDesign: WEB_DESIGNS.FORESIGHT.webDesign,
        mobDesign: WEB_DESIGNS.FORESIGHT.mobDesign,
        hasMobileDesign: true,
      },
      {
        name: "Pose it Perfect Analyzer",
        type: "Website Design",
        year: "2021",
        image: WorkSamples.websiteDesign4,
        webDesign: WEB_DESIGNS.POSE_IT_PERFECT.webDesign,
        mobDesign: WEB_DESIGNS.POSE_IT_PERFECT.mobDesign,
        hasMobileDesign: false,
      },
    ],
    [
      {
        name: "Swiggy Instamart D2C Hipstreet",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing1,
        preview: WorkSamples.hipstreetPreview,
      },
      {
        name: "Swiggy Mega Saving Festival",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing2,
        preview: WorkSamples.megaFestivalPreview,
      },
      {
        name: "Swiggy Instamart Diwali Payday",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing3,
        preview: WorkSamples.diwaliPreview,
      },
      {
        name: "Swiggy Instamart Strawberry",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing4,
        preview: WorkSamples.strawberryPreview,
      },
      {
        name: "Swiggy Instamart Guru Nanak Jayanti",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing5,
        preview: WorkSamples.guruNanakPreview,
      },
      {
        name: "Swiggy Instamart Kartik Purnima",
        type: "In-App Compaign",
        year: "2022",
        image: WorkSamples.inAppMarketing6,
        preview: WorkSamples.kartikPurnimaPreview,
      },
    ],
    [
      {
        name: "Seekhle Financial Literacy Page",
        type: "Brand Identity",
        year: "2021",
        image: WorkSamples.brandIdentity1,
        previewImageSrc : WorkSamples.brandIdentitySeekhlePreview,
        gifSrc : WorkSamples.brandIdentitySeekhleGif
      },
      {
        name: "Foresight Opinion Trading App",
        type: "Brand Identity",
        year: "2022",
        image: WorkSamples.brandIdentity2,
        previewImageSrc : WorkSamples.brandIdentityForesightPreview,
        gifSrc : WorkSamples.brandIdentityForesightGif
      },
    ],
    [
      {
        name: "Tara Indepay Appstore",
        type: "Overview Screenshots",
        year: "2022",
        image: WorkSamples.freelanceProjects1,
        slides: FREELANCE_PROJECTS_SLIDES.TARA_SLIDES,
      },
      {
        name: "Foresight Appstore",
        type: "Overview Screenshots",
        year: "2022",
        image: WorkSamples.freelanceProjects2,
        slides: FREELANCE_PROJECTS_SLIDES.FORESIGHT_SLIDES,
      },
      {
        name: "Josh Talks Pitch Deck",
        type: "Presentation Design",
        year: "2022",
        image: WorkSamples.freelanceProjects3,
        slides: FREELANCE_PROJECTS_SLIDES.JOSH_SLIDES,
      },
      {
        name: "Freelance Clients",
        type: "Print Design",
        year: "2022",
        image: WorkSamples.freelanceProjects4,
        slides: [WORK_SAMPLES.freelanceClientSlide1],
      },
    ],
    [
      {
        name: "Russia vs Ukraine: Indian Students Eviction",
        type: "Infographic Reel",
        year: "2022",
        image: WorkSamples.russiaVsUkraineThumbnail,
        videoId : 'nrzr9pQayyY'
      },
      {
        name: "Sleeping Mattress Marketing",
        type: "Animated Reel",
        year: "2022",
        image: WorkSamples.sleepingMatressThumbnail,
        videoId : '55jDbQVrkGE'
      },
      {
        name: "Finance Case Study",
        type: "Infographic Reel",
        year: "2022",
        image: WorkSamples.financeCaseStudyThumbnail,
        videoId : 'bWNOIMxCVJk'
      },
      {
        name: "Key and Peele: Stock Market",
        type: "Parody Video",
        year: "2022",
        image: WorkSamples.keyPeeleThumbnail,
        videoId : 'IcUsWUFCaYw'
      },
    ],
  ];

  function changeTheme(newTheme) {
    setTheme(newTheme);
    document.getElementById("themeChangeMask").style.display = "block";
    COOKIES.set("theme", newTheme);
    setTimeout(() => {
      document.getElementById("themeChangeMask").style.display = "none";
    }, 800);
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

  window.addEventListener("scroll", reveal);
  reveal();

  window.onscroll = function () {
    scrollFunction();
  };

  document.onclick = function (e) {
    console.log(e.target.id);
    if (e.target.id == "websitePreviewDialog") {
      setWebsitePreviewDialogOpen(false);
      setPreviewLoaded(false);
      setWebsitePreviewMobImgSrc(null);
      setWebsitePreviewWebImgSrc(null);
      setFreelanceProjectsSlideIndex(0);
      setFreelanceProjectSlides([]);
      document.getElementById("switchSlideBtns").style.display = "none";

    } else if (e.target.id == "sliderImageViewDialog") {
      setSliderImageDialogOpen(false);
    } else if(e.target.id == "videoPlayerDialog"){
      setVideoPlayerDialogOpen(false)
      setVideoPlayerVideoId('')
    } else if(e.target.id == "brandIdentityPreviewDialog"){
      setBrandIdentityPreviewDialogGif(null)
      setBrandIdentityPreviewDialogImg(null)
      setBrandIdentityPreviewDialogOpen(false)
    }
  };

  function scrollFunction() {
    let btn = document.getElementById("scrollToTopButton");
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  function openSliderImageDialog(imgSrc) {
    setSliderImageDialogSrc(imgSrc);
    setSliderImageDialogOpen(true);
  }

  function openBrandIdentityPreviewDialog(imgSrc, gifSrc) {
    setBrandIdentityPreviewDialogImg(imgSrc)
    setBrandIdentityPreviewDialogGif(gifSrc)
    setBrandIdentityPreviewDialogOpen(true)
  }

  function openVideoPlayerDialog(videoId){
    setVideoPlayerVideoId(videoId)
    setVideoPlayerDialogOpen(true)
  }

  function switchWebsitePreviewDialogView() {
    let divA = document.getElementById("websiteDesignDivWeb");
    let divB = document.getElementById("websiteDesignDivMob");
    if (window.getComputedStyle(divA).display == "block") {
      divA.style.display = "none";
      divB.style.display = "block";
    } else {
      divA.style.display = "block";
      divB.style.display = "none";
    }
  }

  function openWorkPreviewDialog(previewIndex, contentIndex) {
    if (previewIndex == WORK_PREVIEWS.WEBSITE_DESIGN) {
      if (window.innerWidth <= 480) {
        document.getElementById("websiteDesignDivWeb").style.display = "none";
        document.getElementById("websiteDesignDivMob").style.display = "block";
        document.getElementById("switchButton").style.display = "none";
      } else {
        document.getElementById("websiteDesignDivWeb").style.display = "block";
        document.getElementById("websiteDesignDivMob").style.display = "none";
        document.getElementById("switchButton").style.display = "block";
        if (WORK[previewIndex][contentIndex].hasMobileDesign) {
          document.getElementById("switchButton").style.display = "block";
        } else {
          document.getElementById("switchButton").style.display = "none";
        }
      }
      const webPreviewImg = document.getElementById("websitePreviewWebImg");
      const mobPreviewImg = document.getElementById("websitePreviewMobImg");
      setWebsitePreviewDialogOpen(true);
      setWebsitePreviewWebImgSrc(WORK[previewIndex][contentIndex].webDesign);
      setWebsitePreviewMobImgSrc(WORK[previewIndex][contentIndex].mobDesign);
      webPreviewImg.onload = function () {
        setPreviewLoaded(true);
      };
      mobPreviewImg.onload = function () {
        setPreviewLoaded(true);
      };
    } else if (previewIndex == WORK_PREVIEWS.IN_APP_MARKETING) {
      document.getElementById("websiteDesignDivWeb").style.display = "none";
      document.getElementById("websiteDesignDivMob").style.display = "block";
      document.getElementById("switchButton").style.display = "none";
      const mobPreviewImg = document.getElementById("websitePreviewMobImg");
      setWebsitePreviewDialogOpen(true);
      setWebsitePreviewMobImgSrc(WORK[previewIndex][contentIndex].preview);
      mobPreviewImg.onload = function () {
        setPreviewLoaded(true);
      };
    } else if (previewIndex == WORK_PREVIEWS.FREELANCE_PROJECTS) {
      document.getElementById("websiteDesignDivWeb").style.display = "none";
      document.getElementById("websiteDesignDivMob").style.display = "block";
      document.getElementById("switchButton").style.display = "none";
      document.getElementById("switchSlideBtns").style.display = "flex";
      const mobPreviewImg = document.getElementById("websitePreviewMobImg");
      setWebsitePreviewDialogOpen(true);
      setFreelanceProjectSlides(WORK[previewIndex][contentIndex].slides);

      mobPreviewImg.onload = function () {
        setPreviewLoaded(true);
      };
    } else if(previewIndex == WORK_PREVIEWS.VIDEOGRAPHY){
      openVideoPlayerDialog(WORK[previewIndex][contentIndex].videoId)
      // openVideoPlayerDialog("2g811Eo7K8U")
    } else if(previewIndex == WORK_PREVIEWS.BRAND_IDENTITY){
      openBrandIdentityPreviewDialog(
        WORK[previewIndex][contentIndex].previewImageSrc,
        WORK[previewIndex][contentIndex].gifSrc)
    }
  }

  document.body.style.overflowY =
    sliderImageDialogOpen || websitePreviewDialogOpen || videoPlayerDialogOpen ? "hidden" : "scroll";
  return (
    <div
      className={
        theme == THEMES.DARK ? "darkThemeFont App" : "lightThemeFont App"
      }
      style={{ display: loaded ? "block" : "none" }}
    >
      {theme == THEMES.DARK ? (
        <img id="darkBackground" src={darkBackground}></img>
      ) : (
        <div id="lightBackground"></div>
      )}
      <div
        id="content"
        className={theme == THEMES.DARK ? "darkThemeFont" : "lightThemeFont"}
      >
        <nav>
          <a
            href="#about"
            className={
              theme == THEMES.DARK ? "darkThemeFont" : "lightThemeFont"
            }
          >
            <p>ABOUT</p>
          </a>
          <a
            href="#experience"
            className={
              theme == THEMES.DARK ? "darkThemeFont" : "lightThemeFont"
            }
          >
            <p>EXPERIENCE</p>
          </a>
          <a
            href="#work"
            className={
              theme == THEMES.DARK ? "darkThemeFont" : "lightThemeFont"
            }
          >
            <p>WORK</p>
          </a>
          <a
            href="#contact"
            className={
              theme == THEMES.DARK ? "darkThemeFont" : "lightThemeFont"
            }
          >
            <p>CONTACT</p>
          </a>
          {theme == THEMES.DARK ? (
            <img
              src={themeChangeButtonDarkTheme}
              onClick={() => changeTheme(THEMES.LIGHT)}
            ></img>
          ) : (
            <img
              src={themeChangeButtonLightTheme}
              onClick={() => changeTheme(THEMES.DARK)}
            ></img>
          )}
        </nav>
        <Home theme={theme} THEMES={THEMES}></Home>
        <Marquee
          // className="reveal"
          gradient={false}
          direction="right"
          speed={15}
          children={
            <div
              id="psd"
              className={
                theme == THEMES.DARK ? "backgroundLight" : "backgroundDark"
              }
            >
              {[...Array(12)].map((n, key) => {
                return (
                  <img
                    src={
                      theme == THEMES.DARK
                        ? pesheSeDesignerDarkTheme
                        : pesheSeDesignerLightTheme
                    }
                    key={key}
                  ></img>
                );
              })}
            </div>
          }
        ></Marquee>
        <About theme={theme} THEMES={THEMES}></About>
        <div id="starAndExperience">
          <Experience theme={theme} THEMES={THEMES}></Experience>
          <img
            id="sideStar"
            src={theme == THEMES.DARK ? starDarkTheme : starLightTheme}
          ></img>
        </div>
        <div id="lineAndWork">
          <Work
            theme={theme}
            THEMES={THEMES}
            WORK={WORK}
            openWorkPreviewDialog={openWorkPreviewDialog}
            openVideoPlayerDialog={openVideoPlayerDialog}
          ></Work>
          <img
            id="lineShape"
            src={
              theme == THEMES.DARK ? lineShapeDarkTheme : lineShapeLightTheme
            }
          ></img>
        </div>
        <SocialMediaPosts
          sliderImageDialogOpen={sliderImageDialogOpen}
          openSliderImageDialog={openSliderImageDialog}
        ></SocialMediaPosts>
        <Contact theme={theme} THEMES={THEMES}></Contact>
      </div>
      <div id="scrollToTopButton">
        <a href="#">
          <img
            className={
              theme == THEMES.DARK
                ? "buttonBackgroundDark"
                : "buttonBackgroundLight"
            }
            src={
              theme == THEMES.DARK
                ? scrollToTopButtonDark
                : scrollToTopButtonLight
            }
          ></img>
        </a>
      </div>
      <div
        id="themeChangeMask"
        className="animate__animated animate__fadeIn animate__fadeOut"
      >
        {theme == THEMES.DARK ? (
          <img id="darkBackground" src={darkBackground}></img>
        ) : (
          <div id="lightBackground"></div>
        )}
      </div>
      <div
        id="dialogDiv"
        className="animate__animated fadeIn"
        style={{
          display:
            sliderImageDialogOpen || websitePreviewDialogOpen || videoPlayerDialogOpen || brandIdentityPreviewDialogOpen
              ? "block"
              : "none",
        }}
      >
        <dialog
          id="sliderImageViewDialog"
          open={sliderImageDialogOpen}
          style={{ display: sliderImageDialogOpen ? "block" : "none" }}
        >
          <img src={sliderImageDialogSrc}></img>
        </dialog>

        <dialog
          id="brandIdentityPreviewDialog"
          open={brandIdentityPreviewDialogOpen}
          style={{ display: brandIdentityPreviewDialogOpen ? "block" : "none" }}
        >
          <div id="images">
            <img id="img" src={brandIdentityPreviewDialogImg}></img>
            <img id="gif" src={brandIdentityPreviewDialogGif}></img>
          </div>
        </dialog>

        <dialog
          id="videoPlayerDialog"
          open={videoPlayerDialogOpen}
          style={{ display: videoPlayerDialogOpen ? "block" : "none" }}
        >
          <YouTubePlayer videoId={videoPlayerVideoId}></YouTubePlayer>
        </dialog>

        <dialog
          id="websitePreviewDialog"
          open={websitePreviewDialogOpen}
          style={{ display: websitePreviewDialogOpen ? "block" : "none" }}
        >
          <div id="websiteDesignDivWeb">
            <div id="websitePreview">
              <ReactLoading
                id="loader"
                style={{ display: !previewLoaded ? "block" : "none" }}
                className="loader mt-50"
                type="spokes"
                color="red"
              ></ReactLoading>
              <img
                style={{ visibility: !previewLoaded ? "hidden" : "visible" }}
                id="websitePreviewWebImg"
                src={websitePreviewWebImgSrc}
              ></img>
            </div>
          </div>
          <div id="websiteDesignDivMob">
            <div id="websitePreview">
              <div style={{ display: !previewLoaded ? "block" : "none" }}>
                <ReactLoading
                  id="loader"
                  className="loader mt-50"
                  type="spokes"
                  color="white"
                ></ReactLoading>
              </div>
              <img
                style={{ visibility: !previewLoaded ? "hidden" : "visible" }}
                id="websitePreviewMobImg"
                src={websitePreviewWebMobSrc}
              ></img>
              <div id="switchSlideBtns">
                <button
                  id="leftBtn"
                  style={{
                    display: freelanceProjectsSlideIndex > 0 ? "block" : "none",
                  }}
                  onClick={() => {
                    setFreelanceProjectsSlideIndex(
                      freelanceProjectsSlideIndex - 1
                    )
                    document.getElementById("websitePreviewMobImg").className="animate__animated animate__fadeInLeft"
                  }}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  id="rightBtn"
                  style={{
                    display:
                      freelanceProjectsSlideIndex <
                      freelanceProjectSlides.length - 1
                        ? "block"
                        : "none",
                  }}
                  onClick={() => {
                    setFreelanceProjectsSlideIndex(
                      freelanceProjectsSlideIndex + 1
                    )
                    document.getElementById("websitePreviewMobImg").className="animate__animated animate__fadeInRight"
                  }}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <img id="frame" src={mobileFrame}></img>
          </div>
          <button id="switchButton" onClick={switchWebsitePreviewDialogView}>
            Switch View
          </button>
        </dialog>
      </div>
    </div>
  );
}

export default App;
