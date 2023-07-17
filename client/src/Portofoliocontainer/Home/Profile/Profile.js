import React from "react";
import ScrollService from "../../../Utilities/ScrollService";
import TWriter from "../Twriter";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* Colz */}
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/stamatis.giovanis/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/stamatis-giovanis-b149b2223/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/stamatis_giovanis/">
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
          <div className="profile-details-name">
            <span className="primary-text">
              {""}Welcome , I'm{" "}
              <span className="highlighted-text">Stamatis</span>
            </span>
          </div>
          {/* checked */}
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <TWriter />
              </h1>
            </span>
            <span className="profile-role-tagline">
              {""} knack of building applications with front and back end
              operations
            </span>
          </div>

          {/*  BUTTONS */}
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="stamatis giovanis.pdf" download="stamatis giovanis.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
