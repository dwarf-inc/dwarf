import React from "react";
import Product1 from "../images/products/garden.jpeg";
import Product2 from "../images/products/desk.jpeg";
import Product3 from "../images/products/desk2.jpeg";
import Product4 from "../images/products/digital.jpeg";
import Product5 from "../images/products/library.jpeg";

const Gallary = () => {
  return (
    <div className="products">
      <div className="container">
        <div>
          <h1>Gallary</h1>
        </div>
        <div className="">
          <img src={Product1} />
          <img src={Product2} />
          <img src={Product3} />
          <img src={Product5} />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
