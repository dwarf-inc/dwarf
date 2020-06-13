import React from "react";
import { Link } from "react-router-dom";

const Medicaps = () => {
  return (
    <div>
      <div className="display">
        <div className="container">
          <div className="inner-display">
            <h1 className="text-black">Medicaps</h1>
            <ol className="head-list">
              <a href="#intro">
                <li>What is Medicaps?</li>
              </a>
              <a href="#meaning_and_nature">
                <li>Medicaps: App</li>
              </a>
              <a href="#characterstics">
                <li>Benifits </li>
              </a>
            </ol>
          </div>
        </div>
      </div>

      <section>
        <div className="content-wrapper">
          <h1>OTHER SERVICES </h1>
        </div>
        <div className="sp-container">
          <Link to="/products/smart_library">
            <div className="sp-card">
              <h1>Smart Library</h1>
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
      </section>
    </div>
  );
};

export default Medicaps;
