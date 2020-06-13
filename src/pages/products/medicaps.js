import React from "react";

import Medicaps from "../../components/Products/Medicaps";

import Layout from "../../layout";

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Medicaps />
    </Layout>
  );
};

export default SingleProduct;
