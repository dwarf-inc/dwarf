import React from "react";

// Product Component
import SmartLibrary from "../../components/Products/SmartLibrary";

import Layout from "../../layout";

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SmartLibrary />
    </Layout>
  );
};

export default SingleProduct;
