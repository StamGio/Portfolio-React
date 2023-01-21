import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../Utilities/commonUtils";
import ScrollService from "../../../Utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import logo from "../../../assets/home/logo.jpg";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription = ScrollService.currentScreenBroadCaster;

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  // IF MORE THAN 1 SCREEN DISPLAY SPACE FUNCTION
  const getHeaderOptionsClass = (index) => {
    let classes = "header-options";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-options-seperator";

    // SHOW NAME OF COMP MARKED AS SELECTED WHEN CLICKED
    if (selectedScreen === index) classes += "Selected-header-option";
    return classes;
  };

  // IMPLEMENT THE SWITCH BETWEEN THE SCREENS
  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    // if it does scroll
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="headerr-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>
            {""}
            Giovanis
          </span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
