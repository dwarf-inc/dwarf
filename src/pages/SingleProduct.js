import React from "react";
import { useLocation } from "react-router-dom";

// Product Component
import SmartLibrary from "./products/smart_library";
import DigitalClasses from "./products/digital_classes";
import HealthCenter from "./products/health_center";
import Medicaps from "./products/medicaps";
import NotFound from "./404.js";

const SingleProduct = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const product = location.pathname;
  // let product = props.match.params.id;
  if (product === "/products/medicaps") {
    window.scrollTo(0, 0);
    return <Medicaps />;
  }
  if (product === "/products/smart_library") {
    window.scrollTo(0, 0);
    return <SmartLibrary />;
  }
  if (product === "/products/digital_classes") {
    window.scrollTo(0, 0);
    return <DigitalClasses />;
  }
  if (product === "/products/health_center") {
    window.scrollTo(0, 0);
    return <HealthCenter />;
  }
  return <NotFound />;
};

export default SingleProduct;
