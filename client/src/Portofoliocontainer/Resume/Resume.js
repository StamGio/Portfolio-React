import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

/* STATES */
export default function Resume(props) {
  const [selectedBulletItem, selectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalSetStyle] = useState({});

  // REUSABLE MINOR COMPONENTS

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          {/* Conditional Rendering  */}
          <span>{props.heading ? props.heading : ""} </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
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
    </div>;
  };

  // STATIC RESUME DATA FOR THE LABELS

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: ".svg" },
    { label: "Programming Skills", logoSrc: "education.svg" },
    { label: "Projects", logoSrc: "education.svg" },
    { label: "Interests", logoSrc: "education.svg" },
  ];

  // Static data for skill progress

  const ProgrammingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React Js", ratingPercentage: 30 },
    { skill: "Express Js", ratingPercentage: 30 },
    { skill: "Node Js", ratingPercentage: 40 },
    { skill: "Mongo DB", ratingPercentage: 40 },
    { skill: "Mongoose", ratingPercentage: 45 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "Bootstrap v5", ratingPercentage: 60 },
  ];

  // Static data for Resume

  const projectDetails = [
    {
      title: "Portfolio-React",
      date: { fromDate: "1/23", toDate: "2/23" },
      description: "Neque porro quisquam est qui dolorem i",
    },
    {
      title: "To do List",
      date: { fromDate: "1/23", toDate: "2/23" },
      description: "Neque porro quisquam est qui dolorem i",
    },
    {
      title: "StopIt website",
      date: { fromDate: "1/23", toDate: "2/23" },
      description: "Neque porro quisquam est qui dolorem i",
    },
    {
      title: "Tindog",
      date: { fromDate: "1/23", toDate: "2/23" },
      description: "Neque porro quisquam est qui dolorem i",
    },
    {
      title: "Drumms",
      date: { fromDate: "1/23", toDate: "2/23" },
      description: "Neque porro quisquam est qui dolorem i",
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
            - Worked for a decade as Chef in varius Restaurants and Hotels in
            Greece and France.
          </span>
          <br />
          <span className="resume-description-text">
            - Countries Developed a variety of small apps and websites,also
            covered a large curriculum of necessary informations about web
            development and internet in general.{""}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    // PROGRAMMING SKILLS
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {ProgrammingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // PROJECTS
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDatea={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    // INTERESTS
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Technology"
        description="I really like to look for new technologies and news about software and hardware products."
      />
      <ResumeHeading
        heading="Sports"
        description="Playing and watching sports its my hobby from my younger age until now, football and basketball are my most favourite ones "
      />
      <ResumeHeading
        heading="Gaming"
        description="Its my way to chill,playing and watching immersive stories is my favourite part."
      />
    </div>,
  ];

  //   // Implement smooth scroll

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faceInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Reasonable component

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      </div>
    </div>
  );
}
