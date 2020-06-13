import React from "react";
import { Link } from "react-router-dom";

//Context API
const Services = () => {
  return (
    <>
      <div className="sp-container ">
        <Link to="/products/medicaps">
          <div className="sp-card background-third">
            <h1>Medicaps </h1>
          </div>
        </Link>
      </div>
      <div className="sp-container">
        <Link to="/products/smart_library">
          <div className="sp-card">
            <h1>Smart Library</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container">
        <Link to="/products/digital_classes">
          <div className="sp-card background-second">
            <h1>Digital Classes</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container ">
        <Link to="/products/health_center">
          <div className="sp-card background-third">
            <h1>Health Center</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Services;
