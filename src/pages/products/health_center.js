import React from "react";
import HealthCenter from "../../components/Products/HealthCenter";
import Layout from "../../layout";

const SingleProduct = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <HealthCenter />
    </Layout>
  );
};

export default SingleProduct;
