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
        speed={12}
        children={
          <div
            id="topSlider"
          >
            {Posts
            .map((src, key) => {
              return (
                <img
                  src={src}
                  key={key}
                ></img>
              );
            })}
          </div>
        }
      ></Marquee>
      <Marquee
        gradient={false}
        direction="left"
        speed={12}
        children={
          <div
            id="bottomSlider"
          >
            {
            // [...Posts.slice(6), ...Posts.slice(0, 6).reverse()]
            Posts.reverse()
            .map((src, key) => {
              return (
                <img
                  src={src}
                  key={key}
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
