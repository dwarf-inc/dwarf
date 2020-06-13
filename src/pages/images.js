import React from "react";

import Layout from "../layout";

const Images = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="images">
        <div className="container">
          <h1>Images</h1>
          <div className="inner-images">
            <img src="https://unsplash.it/200" alt="img"></img>
            <img src="https://unsplash.it/201" alt="img"></img>
            <img src="https://unsplash.it/202" alt="img"></img>
            <img src="https://unsplash.it/204" alt="img"></img>
            <img src="https://unsplash.it/205" alt="img"></img>
            <img src="https://unsplash.it/206" alt="img"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Images;
