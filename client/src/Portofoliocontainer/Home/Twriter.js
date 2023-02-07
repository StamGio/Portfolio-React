import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Twriter = () => {
  const { text } = useTypewriter({
    words: [
      "Full Stack Developer" + "🚀",
      "Tech Enthusiast",
      "Mern Stack Professional",
    ],
    loop: false, // Infinit
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="TWriter">
      <span className="shadow">
        <span style={{ color: "#ff5823" }}>{text[0]}</span>

        {text.slice(1)}
      </span>
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default Twriter;
