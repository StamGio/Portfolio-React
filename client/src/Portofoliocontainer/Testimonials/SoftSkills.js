import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./SoftSkills.css";

import shape from "../../../src/assets/Testimonial/shape-bg.png";

export default function SoftSkills(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faceInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  //  Owl Carousel set up

  const options = {
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },

      768: {
        items: 3,
        nav: true,
      },

      1000: {
        items: 3,
        nav: true,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Soft skills"}
        subHeading={"These Skills are Part of my Character"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {/* 1 */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="client-info">
                      <img
                        src="./img/time.png"
                        alt="No internet connection"
                      ></img>
                      <h5>Time management</h5>
                    </div>
                    <p>
                      <i className="fa fa-quote-left" />
                      My experiense in restaurants taught me to manage and
                      organize my time,priorities and productivity in a
                      magnificent way. The value of time is critical in any
                      industry.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="client-info">
                      <img
                        src="./img/team.png"
                        alt="No internet connection"
                      ></img>
                      <h5>Team Spirit</h5>
                    </div>
                    <p>
                      <i className="fa fa-quote-left" />
                      Demonstrated strong team spirit, fostering unity,
                      cooperation, and commitment to achieve goals, leading to
                      improved productivity and job satisfaction for me and my
                      partners.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="client-info">
                      <img
                        src="./img/thinking1.png"
                        alt="No internet connection"
                      ></img>
                      <h5>Critical Thinking</h5>
                    </div>
                    <p>
                      <i className="fa fa-quote-left" />
                      After a lot of training i manage to start to understand
                      the way i should approach the problems i face. Finding the
                      solution is the best part of the story and the most
                      satisfaying.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="client-info">
                      <img
                        src="/img/algorithms.png"
                        alt="No internet connection"
                      />

                      <h5>DSA Comprehension</h5>
                    </div>
                    <p>
                      <i className="fa fa-quote-left" />
                      Familiarity with fundamental concepts of dsa, able to
                      design simple solutions to problems, with a strong
                      foundation for problem-solving skills.Training in these
                      concepts its my cup of tea.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="client-info">
                      <img
                        src="./img/learning.png"
                        alt="No internet connection"
                      ></img>
                      <h5>Self Learning</h5>
                    </div>
                    <p>
                      <i className="fa fa-quote-left" />
                      Continuously skills improving and learning are fundimental
                      for persons who have vision and dreams. Nowadays with all
                      these tools, self-teach can be in a high-level.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
