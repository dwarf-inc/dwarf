import React from "react";
import WhoAreWe from "../components/AboutPage/WhoAreWe";
import AboutInfo from "../components/AboutPage/AboutInfo";
import Layout from "../layout";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <WhoAreWe />
      <AboutInfo />
    </Layout>
  );
};

export default About;
