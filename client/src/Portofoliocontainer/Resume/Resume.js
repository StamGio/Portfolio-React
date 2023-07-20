import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";
/* STATES */
const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // Implement smooth scroll

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // REUSABLE MINOR COMPONENTS

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          {/* Conditional Rendering  */}
          <span>{props.heading ? props.heading : ""} </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  // STATIC RESUME DATA FOR THE LABELS

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  // Static data for skill progress

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React Js", ratingPercentage: 30 },
    { skill: "Typescript", ratingPercentage: 40 },
    { skill: "Node Js", ratingPercentage: 30 },
    { skill: "Mongo DB", ratingPercentage: 30 },
    { skill: "Mongoose", ratingPercentage: 30 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "Bootstrap v5", ratingPercentage: 60 },
  ];

  // Static data for Resume

  const projectsDetails = [
    {
      title: "AOE III Decks",
      duration: { fromDate: "4/23", toDate: "7/23" },
      description: "Deck ideas for Age Of Empires 3 game ",
      subHeading: "Technologies Used: Typescript,React,Chakra UI",
    },
    {
      title: "Portfolio React",
      duration: { fromDate: "12/22", toDate: "2/23" },
      description: "My personal portfolio",
      subHeading: "Technologies Used: React JS, Bootsrap v5",
    },
    {
      title: "Game Hub",
      duration: { fromDate: "2/23", toDate: "4/23" },
      description: "A games explorer based on the RAWG API",
      subHeading: "Technologies Used: Typescript,React,Chakra UI",
    },
    {
      title: "For more info",
      duration: { fromDate: "", toDate: "" },
      description: "Click the link ☝️",
      subHeading: (
        <a className="linktree" href="https://linktr.ee/GioCodingDev">
          Visit my linktree
        </a>
      ),
    },
  ];

  // Render minor reasonable component

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National and Kapodistrian University , Athens"}
        subHeading={"Seminar E-class Web Developer"}
        fromDate={"2022"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Udemy Bootcamp Certification , Remote"}
        subHeading={"Complete Web Developer 2022"}
        fromDate={"2021"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"High School , Nea Peramos"}
        subHeading={"Command Secondary School Nea Peramos"}
        fromDate={"2005"}
        toDate={"2011"}
      />
    </div>,

    // WORK EXPERIENCE

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Remote Services"}
          subHeading={"Full Stack Developer entry level"}
          fromDate={"2023"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            - Currently developing my MERN stack skills and looking for my first
            professional experience.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a variety of small apps and websites, also studied a
            large curriculum of necessary information about web development and
            internet in general.{" "}
          </span>
          <br />
          <div className="experience-description">
            <ResumeHeading
              heading={"Chef"}
              subHeading={"Chef de Partie"}
              fromDate={"2012"}
              toDate={"2022"}
            />
          </div>
          <span className="resume-description-text">
            - Worked for a decade as Chef in varius Restaurants and Hotels in
            Greece and France.{""}
          </span>
          <br />

          {/* <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span> */}
          <br />
        </div>
      </div>
    </div>,

    // PROGRAMMING SKILLS
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // PROJECTS
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    // INTERESTS
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Technology"
        description="I really like to explore for new technologies and news about software and hardware products ."
      />
      <ResumeHeading
        heading="Sports"
        description="Sports are my hobby from my younger age until now,
        football and basketball are my most favourite ones but i enjoy most of them."
      />
      <ResumeHeading
        heading="Gaming"
        description="This is my favourite way to chill. 
        Playing and watching immersive stories is the best part of it."
      />
    </div>,
  ];

  // Carousal function
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  // Bullets Function

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  //Get  Resume function

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  // Reasonable component

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
