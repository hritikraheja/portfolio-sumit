import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import darkBackground from "../assets/Noise.png";
import { Home } from "../components/Home";
import About from "./About";
import { Experience } from "./Experience";
import star from '../assets/star.svg'
import pesheSeDesigner from "../assets/pesheSeDesigner.svg";
import Marquee from "react-fast-marquee";
import { Work } from "./Work";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <img id="background" src={darkBackground}></img>
      <div id="content">
        <nav>
          <p>ABOUT</p>
          <p>EXPERIENCE</p>
          <p>WORK</p>
          <p>CONTACT</p>
          <button>
            <i class="fas fa-sun"></i>
          </button>
        </nav>
        <Home></Home>
        <Marquee
          id="strip"
          gradient={false}
          direction="right"
          speed ={22}
          children={
            <div id="psd">
              <img src={pesheSeDesigner}></img>
              <img src={pesheSeDesigner}></img>
              <img src={pesheSeDesigner}></img>
              <img src={pesheSeDesigner}></img>
              <img src={pesheSeDesigner}></img>
            </div>
          }
        ></Marquee>
        <About></About>
        <div id="starAndExperience">
          <Experience></Experience>
          <img id="sideStar" src=
            {star}></img>
        </div>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
