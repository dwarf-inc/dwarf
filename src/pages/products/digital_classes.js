import React from "react";

// Product Component
import DigitalClasses from "../../components/Products/DigitalClasses";

import Layout from "../../layout";

const SingleProduct = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <DigitalClasses />
    </Layout>
  );
};

export default SingleProduct;
