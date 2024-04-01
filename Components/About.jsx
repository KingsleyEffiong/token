import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return <section id="about" className="small_pt">
    <div className="container">
      <div className="row align-item-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="text_md_center">
            <img src="assets/images/doctor_nurse.png" alt="image" className="animation" data-animation="zoomIn" data-animation-delay="0.2s"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 res_sm_mt_20">
          <div className="title_default_light title_border">
            {/* <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
               About Mountech Token
            </h4> */}
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            We are a team of passionate tech enthusiasts who are
dedicated to creating software solutions that make hospital and
healthcare facilities run more efficiently and effectively. Our
solutions are easy to use and designed to simplify processes,
reduce administrative burden, and increase patient outcomes.
We have a team of experienced software developers and
healthcare professionals who are dedicated to staying up-to-
date with the ever-changing healthcare industry.
</p>
<p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
What we do at Mount Tech Sol isn’t just about building
software, it’s about building a community that values
collaboration, transparency and feedback. Come join us on our
mission to revolutionize the healthcare industry with technology.
Together, we can create a healthier, happier world for everyone.
Welcome to Mount Tech Solutions
</p>
          </div>
          <a href="https://t.me/+o0-w-_44_rdkYTQ0" className="btn btn-default btn-radius video animation" data-animation="fadeInUp" data-animation-delay="01s">
            Join our community <BsArrowRight/>
          </a>
        </div>
      </div>
      </div>
  </section>;
};

export default About;
