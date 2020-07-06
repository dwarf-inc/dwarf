import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

//import component
import FixedItems from "./FixedItems";

import { gsap, TimelineMax } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const Header = (props) => {
  const pageTitle = props.title;
  const [isExpandable, setIsExpandable] = useState(false);

  const timeline = new TimelineMax();

  useEffect(() => {
    pageTitle === "Home" ? homePageAnimation() : otherPageAnimations();
  }, []);

  const homePageAnimation = () => {
    timeline.fromTo(
      ".header",
      1,
      { height: "0%" },
      { height: "100%", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".sub-heading",
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut", stagger: 0.5 },
      "-=.2"
    );
    timeline.fromTo(
      ".logo",
      0.35,
      {
        width: "0px",
        padding: "0px",
        overflow: "hidden",
      },
      {
        width: "30px",
        padding: "3px",
        ease: "Power2.easeInOut",
      },
      "-=.5"
    );
    timeline.fromTo(
      ".fixed-nav",
      0.35,
      {
        opacity: 0,
        x: "-10px",
        overflow: "hidden",
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut",
      },
      "-=.5"
    );
    timeline.fromTo(
      ".social-stag",
      0.35,
      {
        opacity: 0,
        x: "-10px",
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut",
        stagger: 0.2,
      }
    );
  };

  const otherPageAnimations = () => {
    timeline.fromTo(
      ".header",
      1,
      { height: "0%" },
      { height: "100%", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".title",
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" },
      "-=.2"
    );
    timeline.fromTo(
      ".social-stag",
      0.35,
      {
        opacity: 0,
        x: "-10px",
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut",
        stagger: 0.2,
      }
    );
  };

  const expandNavWithAnim = () => {
    setIsExpandable(!isExpandable);

    const timeline = new TimelineMax();

    timeline.to(".nav-open ul li", 0.01, { opacity: 0 });
    timeline.fromTo(
      ".nav-open",
      0.5,
      { x: "100vw" },
      { x: "35vw", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".nav-open ul li",
      0.4,
      { y: "20px", opacity: 0 },
      { y: "0px", opacity: 1, ease: "Power2.easeInOut", stagger: 0.1 }
    );
  };

  // setting image background
  var HeaderStyle = {};
  HeaderStyle = {
    backgroundColor: "#ffeaa7",
  };
  if (props.backgroundImage) {
    HeaderStyle = {
      backgroundImage: `url(${require("../images/header/" +
        props.backgroundImage)})`,
    };
  }
  if (props.backgroundColor) {
    HeaderStyle = {
      backgroundColor: props.backgroundColor,
    };
  }
  if (props.background) {
    HeaderStyle = {
      background: props.background,
    };
  }

  return (
    <>
      <header>
        <div className="header" style={HeaderStyle}>
          <div className="nav-container">
            <nav>
              <Link to="/" className="logo">
                <div></div>
              </Link>
            </nav>
            <div className="fixed-nav" onClick={expandNavWithAnim}>
              <div className={`bar ${isExpandable ? "bar-active" : ""} `}>
                <div className="fa-line"></div>
                <div className="fa-line"></div>
                <div className="fa-line"></div>
              </div>
            </div>
            <div className={`nav-open ${isExpandable ? "" : "nav-display"}`}>
              <div>
                <ul>
                  <Link to="/" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      Home
                    </li>
                  </Link>
                  <Link to="/about" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">
                      <i className="fa fa-info-circle"></i> About
                    </li>
                  </Link>
                  <Link to="/product" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">
                      <i className="fa fa-cogs"></i> Services
                    </li>
                  </Link>
                  <Link to="/images" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">
                      <i className="fa fa-camera"></i> Gallary
                    </li>
                  </Link>
                  <Link to="/contact" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">
                      <i className="fa fa-envelope"></i> Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="left">{props.children}</div>
            <div className="right"></div>
          </div>
          <FixedItems />
        </div>
      </header>
    </>
  );
};

export default Header;
