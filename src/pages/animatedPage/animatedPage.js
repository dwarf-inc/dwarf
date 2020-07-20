import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// css
import "../../css/animatedPage.scss";

import logo from "../../images/logo.png";
import logoWebp from "../../images/logo.webp";
// gsap
import { gsap, TimelineMax, TweenMax, Expo } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const AnimatedPage = (props) => {
  const t1 = new TimelineMax();
  console.log(props);

  useEffect(() => {
    animatePage();
  }, []);

  const animatePage = () => {
    t1.from(".left-container", 1.3, {
      width: "0",
      ease: Expo.easeInOut,
    });
    t1.from(".right-container", 2, {
      delay: -1,
      width: "0",
      opacity: "0",
      ease: Expo.easeInOut,
    });
    t1.from(".center-container", 1, {
      delay: -0.3,
      width: "0",
      x: -20,
      ease: Expo.easeInOut,
    });
    t1.from(".t-logo", 0.7, {
      delay: -0.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    t1.from(".info", 0.8, {
      delay: -0.5,
      y: 50,
      opacity: 0,
      scale: 2.5,
      ease: Expo.easeInOut,
    });
    t1.from(".story", 0.7, {
      delay: -0.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    t1.from(".menu", 0.7, {
      delay: -0.5,
      y: 20,
      opacity: 0,
      rotation: 90,
      ease: Expo.easeInOut,
    });
    t1.staggerFrom(
      ".social ul",
      1,
      {
        delay: 0.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.1
    );
  };
  return (
    <div class="containers">
      <div class="left-container">
        <Link to="/">
          <div class="t-logo">
            <picture>
              <source srcset={logoWebp} type="image/webp" />
              <img src={logo} alt="logo" />
            </picture>
          </div>
        </Link>
        <div class="info">
          <a href="#">FAQ</a>
          <a href="#">Help</a>
        </div>
      </div>

      <div class="right-container">
        <div class="first-block"></div>
        <div class="menu-container">
          <div class="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="story">
          <h1>Medicaps</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            tempore.ipsum dolor sit. tempore
          </p>
          <Link to="/product/">
            <p>Read More</p>
          </Link>
        </div>
        {/* <div class="social-container">
          <li class="social">
            <ul>Facebook</ul>
            <ul>Instagram</ul>
            <ul>Twitter</ul>
          </li>
        </div> */}
      </div>
      <div class="center-container"></div>
    </div>
  );
};

export default AnimatedPage;
