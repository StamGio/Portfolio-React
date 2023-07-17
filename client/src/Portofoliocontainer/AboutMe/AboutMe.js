import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollHeading from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import ScrollService from "../../Utilities/ScrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  // implement smooth scroll

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Descriptions and bullets

  const SCREEN_CONSTANTS = {
    description:
      "I'm Stamatis Giovanis a full stack web developer with background knowledge of MERN stack,Strong professional with willing to become a high performing member of a team and asset for an organization",
    highlights: {
      bullets: [
        "Full Stack Development",
        "Manage and create Databases",
        "Building REST API",
        "MERN stack applications",
        "Version Control",
      ],
      heading: "Here are a few Highlights",
    },
  };

  // Rendering everything
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""} Hire Me{" "}
              </button>
              <a
                href="./stamatis giovaniscv.pdf"
                download="./stamatis giovaniscv.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
