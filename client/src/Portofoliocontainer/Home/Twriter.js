import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Twriter = () => {
  const { text } = useTypewriter({
    words: [
      "Full Stack Developer",
      "Tech Enthusiast",
      "Mern Stack Professional ",
    ],
    loop: false, // Infinit
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="TWriter">
      <span>{text}</span>
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default Twriter;
