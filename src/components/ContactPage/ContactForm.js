import React from "react";
import AboutSvg from "../../images/aboutsvg";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="inner-contact">
          <div className="contact-img">
            <AboutSvg />
          </div>
          <div className="content">
            <h3>
              <span>Email </span> <br />
              comm.dwarf@gmail.com
            </h3>
            <br />
            <h3>
              <span>Sales and Support </span> <br />
              7415626643
            </h3>
            <br />
            <h3>
              <span>Address </span>
              <br />
              <i className="fa fa-university" aria-hidden="true"></i>
              3rd Row, Jaunapuriya House, Chattarpur, South Delhi, 110047 India
              <br />
              <br />
              <i className="fa fa-university" aria-hidden="true"></i>
              A-83 Anand Nagar, Gwalior, Madhya Pradesh 474012
              <br />
              <br />
              <div>Delhi | Madhya Pradesh</div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
