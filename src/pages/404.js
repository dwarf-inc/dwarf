import React from "react";
import Layout from "../layout";

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="page-not-found">
        <h1 className="">Opps! 404 Not Found</h1>
      </div>
    </Layout>
  );
};

export default NotFound;
