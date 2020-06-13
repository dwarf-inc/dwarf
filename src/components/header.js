import React, { useState } from "react";
import FixedItems from "./FixedItems";
import logo from "../images/logo.png";
import logoWebp from "../images/logo.webp";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navControler = useAnimation();

  const setNavigationOpen = () => {
    setIsOpen(true);
    navControler.start("visible");
  };
  const setNavigationClose = () => {
    setIsOpen(false);
    navControler.start("hidden");
  };

  const variants = {
    visible: { opacity: 1, y: "0vh", transition: { duration: 0.25 } },
    hidden: { opacity: 0, y: "-100vh", transition: { duration: 0.25 } },
  };

  const list = {
    visible: { opacity: 1, transition: { duration: 0.1 } },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
    hidden: { opacity: 0, x: -100 },
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  return (
    <>
      <header className="header">
        <motion.div
          className="fixed-nav-open"
          variants={variants}
          animate={navControler}
          initial="hidden"
        >
          <div className="container">
            <div className="close" onClick={setNavigationClose}>
              <i className="gg-close"></i>
            </div>
          </div>
          <motion.ul initial="hidden" animate={navControler} variants={list}>
            <Link to="/">
              <motion.li variants={item} whileHover="hover" whileTap="tap">
                Home
              </motion.li>
            </Link>
            <Link to="/about">
              <motion.li variants={item} whileHover="hover" whileTap="tap">
                About
              </motion.li>
            </Link>
            <Link to="/product">
              <motion.li variants={item} whileHover="hover" whileTap="tap">
                Services
              </motion.li>
            </Link>
            <Link to="/images">
              <motion.li variants={item} whileHover="hover" whileTap="tap">
                Gallary
              </motion.li>
            </Link>
            <Link to="/contact">
              <motion.li variants={item} whileHover="hover" whileTap="tap">
                Contact
              </motion.li>
            </Link>
          </motion.ul>
        </motion.div>
        <div className="container">
          <div className="inner-header">
            <h1 className="logo">
              <Link to="/">
                <picture>
                  <source srcset={logoWebp} type="image/webp" />
                  <img src={logo} alt="logo" />
                </picture>
              </Link>
            </h1>
            <div className="nav-icon" onClick={setNavigationOpen}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                  fill="currentColor"
                />
                <path
                  d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                  fill="currentColor"
                />
                <path
                  d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <FixedItems />
      </header>
    </>
  );
};

export default Header;
