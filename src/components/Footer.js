import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <footer>
        <section>
          <div className="footer-flex">
            <div className="footer-links">
              <Link to="/">
                <h3 className="unactive">Home</h3>
              </Link>

              <Link to="/about">
                <h3 className="unactive">About</h3>
              </Link>

              <Link to="/product">
                <h3 className="unactive">Services</h3>
              </Link>

              <Link to="/images">
                <h3 className="unactive">Gallary</h3>
              </Link>

              <Link to="/contact">
                <h3 className="unactive">Contact</h3>
              </Link>
            </div>
            <div className="to-top">
              <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>{" "}
              <a href="# ">back to top</a>
            </div>
          </div>
        </section>
        <h2 className="foot">© Dwarf 2020</h2>
      </footer>
    </div>
  );
};

export default Footer;
