import React from "react";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";

import WhoAreWe from "../components/AboutPage/WhoAreWe";
import Mission from "../components/Mission";
import Future from "../components/Future";
import Method from "../components/Method";
import Quote from "../components/Quote";

import Layout from "../layout";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <div className="wrapper">
          <div className="container">
            <div className="inner-wrapper">
              <h1>
                <Typewriter
                  options={{
                    strings: ["Dwarf", "By You For You"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    cursor: ".",
                    start: 3000,
                  }}
                />
              </h1>
              <h3>
                Organisation Operating in the field of Construction,
                Fabrication, Smart Gardens, Smart Library, Smart parking
                Solutions
              </h3>
              <Link to="/product">
                <button>View Services</button>
              </Link>
            </div>
          </div>
        </div>

        {/* <Header title="Home" backgroundImage="home.jpg">
        <div className="sub-heading">
          <h1>
            <Typewriter
              options={{
                strings: ["Dwarf", "By You For You"],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: ".",
                start: 3000,
              }}
            />
          </h1>
          <h2>Building Smart </h2>
          <h2>
            India<span className="dot">.</span>
          </h2>
        </div>
      </Header> */}

        <Quote />

        <WhoAreWe />

        <Mission />

        <Future />

        <Method />
      </Layout>
    </>
  );
};

export default Home;
