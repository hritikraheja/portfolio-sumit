import React from "react";
import "../css/SocialMediaPosts.css";
import Marquee from "react-fast-marquee";
import { Posts } from "../assets/Posts";

function SocialMediaPosts(props) {
  return (
    <div id="socialMediaPosts" className="reveal">
        <div id="header">
            <p>SOCIAL MEDIA POST</p>
            <span>Marketing Post<br></br>Carousals<br></br>Infographics</span>
        </div>
      <Marquee
        gradient={false}
        direction="right"
        speed={15}
        play={!props.sliderImageDialogOpen}
        children={
          <div
            id="topSlider"
          >
            {Posts.slice(12)
            .map((src, key) => {
              return (
                <img
                  src={src}
                  key={key}
                  onClick={() => {props.openSliderImageDialog(src)}}
                ></img>
              );
            })}
          </div>
        }
      ></Marquee>
      <Marquee
        gradient={false}
        direction="left"
        speed={15}
        play={!props.sliderImageDialogOpen}
        children={
          <div
            id="bottomSlider"
          >
            {
            Posts.slice(0, 12)
            .map((src, key) => {
              return (
                <img
                  src={src}
                  key={key}
                  onClick={() => {props.openSliderImageDialog(src)}}
                ></img>
              );
            })}
          </div>
        }
      ></Marquee>
    </div>
  );
}

export default SocialMediaPosts;
