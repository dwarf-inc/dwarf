import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// css
import "../../css/animatedPage.scss";

import logo from "../../images/logo.png";
import logoWebp from "../../images/logo.webp";
// gsap
import { gsap, TimelineMax, Expo } from "gsap";
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
    <div>
      <div class="containers">
        <div class="left-container">
          <Link to="/">
            <div class="t-logo">
              <img
                src={require("../../images/medicaps_logo_small.png")}
                alt="logo"
              />
            </div>
          </Link>
          <div class="info">
            <li class="social">
              <ul className="fb">
                <a
                  rel="stylesheet"
                  href="https://www.facebook.com/Medicapscare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </ul>
              <ul className="linkedin">
                <a
                  href="https://www.linkedin.com/company/medicaps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </ul>
              <ul>Twitter</ul>
            </li>
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
              Medicaps is an AI-powered healthcare platform that connects you to
              hundreds of top-notch doctors online. On Medicaps, we aim to
              provide instant access to high-quality and reliable healthcare,
              especially for non-emergency conditions.
            </p>
            {/* <Link to="/product/">
            <p>Read More</p>
          </Link> */}
          </div>
          {/* <div class="social-container"></div> */}
        </div>
        <div class="center-container"></div>
      </div>

      <div className="medicaps-content">
        <section>
          <h1>Why do I need a health checkup?</h1>
          <p>
            A timely medical checkup helps in ensuring that your health is in
            track and detect any early signs of medical conditions that may be
            life-threatening in the long run. Early diagnosis through a full
            body checkup increases your chances of effective treatment and cure.
            It also helps in reducing heavy medical expenses in the future.
          </p>
        </section>
        <section>
          <h1>How often should I get a health checkup?</h1>
          <p>
            In general, it is best to opt for a full body checkup every year
            after you’ve crossed the age of 30. You can also take up a full body
            exam if you are currently having a stressful or hectic day-to-day
            routine and exhibit early symptoms of various lifestyle diseases. A
            medical checkup will help assess hereditary illnesses and the
            development of any pre-existing disease.
          </p>
        </section>
        <section>
          <h1>How do regular health checkups benefit me?</h1>
          <p>
            Apart from the relief that you are in the pink of health, regular
            full body tests offer the following benefits:
          </p>
          <ul>
            <li>
              Early diagnosis of diseases: With heart attacks and cancer being a
              few of the common causes of death in individuals, it is always
              better to opt for preventive health checkups on an annual basis.
              Not only will this increase the chances for survival for the
              individual, but it will also help in reducing the course of
              treatment.
            </li>
            <li>
              Subsidized medical costs: A shorter duration of treatment due to
              the early diagnosis of a disease will automatically contribute to
              subsidized medical expenses. A regular health screening will also
              offer the incomparable benefit of knowing you are in sound health
              – which is priceless.
            </li>
            <li>
              Variety of tests included: A health screening or full body checkup
              includes a variety of blood tests that check for a plethora of
              diseases. From diabetes, cancer and anemia to high blood pressure
              and other cardiovascular diseases, you will be checked for all
              conditions.
            </li>
            <li>
              Functioning of body organs: A regular health screening or annual
              doctor checkup also ensures the sound functioning of vital body
              organs including the heart, lungs, thyroid and liver.
            </li>
          </ul>
        </section>
        <section>
          <h1>What are the types of health checkups?</h1>
          <h4>
            There are a variety of health checkups available as per the symptoms
            you exhibit and the various lifestyle habits you indulge in.
            Following are the broad health packages you can opt for:
          </h4>
          <ul>
            <li>
              Full body check: This is the best type of health checkup that can
              be taken up on an annual basis. You can choose from advanced full
              body checkup for men, advanced full body checkup for women, a full
              body check of 50+ tests or a basic full body check of 35 tests.
            </li>
            <li>
              Conditions health packages: These health packages are best taken
              when you exhibit early symptoms of common diseases. Conditions
              health packages also include risk assessments that check if you
              are at the risk of getting a particular disease. A few of the
              common condition health packages include thyroid care, diabetes
              screening, full blood count, and vitamin D test, etc.
            </li>
            <li>
              Lifestyle health packages: With the rise in hectic work schedules
              and pollution levels, many individuals are prone to lifestyle
              diseases that need to be diagnosed immediately for effective
              treatment. The most common lifestyle health packages include
              cardiac risk assessment, obesity risk, stress assessment, and
              alcohol risk assessment, etc.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AnimatedPage;
