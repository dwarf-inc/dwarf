import React from "react";
import { motion } from "framer-motion";

const Playground = () => {
  const variants = {
    open: {
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div>
      <h1>Playground</h1>
      <motion.ul animate="hidden" variants={variants}>
        <motion.li variants={variants}>Hello</motion.li>
        <motion.li variants={variants}>Hello</motion.li>
        <motion.li variants={variants}>Hello</motion.li>
      </motion.ul>
    </div>
  );
};

export default Playground;
