import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = (props) => {
  return (
    <Typewriter
      options={{
        strings: [props.title],
        autoStart: true,
        loop: true,
        delay: 100,
        cursor: ".",
        start: 3000,
      }}
    />
  );
};

export default TypewriterEffect;
