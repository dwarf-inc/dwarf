import React from "react";
import Services from "../components/Services";

import Layout from "../layout";

const Product = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default Product;
