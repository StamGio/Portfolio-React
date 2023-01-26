import React from "react";
import OwlCarousel from "react-owl-carousel";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faceInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What are my clients say about me"}
      />
      <section className="testimonial-section" id={props.id || ""}></section>
      <div className="conntainer">
        <div className="row">
          <OwlCarousel className="owl-carousel" id="testimonial-carousel">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img
                    src="img/testimonial/lady.png"
                    alt="No internet connection"
                  ></img>
                  <h5>Daisy Dominic</h5>
                  <p>CEO InansGlobal</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img
                    src="img/testimonial/lady.png"
                    alt="No internet connection"
                  ></img>
                  <h5>Daisy Dominic</h5>
                  <p>CEO InansGlobal</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img
                    src="img/testimonial/lady.png"
                    alt="No internet connection"
                  ></img>
                  <h5>Daisy Dominic</h5>
                  <p>CEO InansGlobal</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
