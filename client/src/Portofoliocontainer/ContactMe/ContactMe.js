import React from "react";
// import imgBack from "../../../src/images/mailz.jpeg";
// import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { TypeAnimation } from "react-type-animation";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faceInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={["Get in Touch", 3000, "Send me Email 📧", 3000]}
              cursor={true}
              repeat={Infinity}
            />
          </h2>
          <a href="https://www.facebook.com/stamatis.giovanis/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/stamatis-giovanis-b149b2223/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/stam_gio_/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/StamGio">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://twitter.com/StamatisGio">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
