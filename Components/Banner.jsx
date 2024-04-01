import React from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home"
      className="section_banner bg_black_dark"
      data-zindex="1"
      data-parrallax="scroll"
      data-image-src="assets/images/doctor_nurse.png"
    >
      <div className="banner_effect"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="banner_text_s2 text_md_center">
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <strong>Health Care Elivated</strong>: <br/>
                <strong> Harnessing Blockchain for smarter Solutions. </strong> 
              </h1>
              <h5
                className="animation presale_txt text-write"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Token Presale is <mark className="gradient_box">Live</mark>
              </h5>
              <div
                className="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="#white" 
                  className="btn btn-default btn-radius nav-link content-popup"
                >
                  Whitepaper
                  <BsArrowRight />
                </a> 
                <a href="#ico" className="btn btn-border btn-radius">
                  Buy Token Now! <BsArrowRight />
                </a>
                {/* <a onClick={()=>transferNativeToken()} className="btn btn-border btn-radius">
                  Transfor Token <BsArrowRight />
                </a> */}
              </div>
              <span 
                className="text-white icon_title animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                We accept:
              </span>
              <ul className="list_none currency_icon">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <span className="new_icon_style">
                    <img src="assets/images/bnb.png" alt=""style={{
                      width:'50px'
                    }}/>  BNB
                  </span>
                  <span></span>
                </li>

                {/* <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <span className="new_icon_style">
                    <FaEthereum className="new_font_size" />
                  </span>
                  <span>Ethereum</span>
                </li>

                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <span className="new_icon_style">
                    <SiLitecoin className="new_font_size" />
                  </span>
                  <span>Litecoin</span>
                </li>

                <li
                  className="animtion"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <span className="new_icon_style">
                    <SiRipple className="new_font_size" />
                  </span>
                  <span>Ripple</span>
                </li> */}
              </ul>
              <div
                id="white" 
                className="team_pop mfp-hide"
              >
                <div className="row m-0">
                  <div className="col-md-7">
                    <div className="pt-3 pb-3">
                      <div className="title_dark title_border">
                        <h4>View Whitepaper</h4>
                        <p style={{
                          color:"black"
                        }}>
                  Mount Tech Solutions stands as a leading provider of advanced software
solutions specifically tailored for hospitals and healthcare facilities. Our primary
objective revolves around leveraging the power of technology to simplify
processes, enhance operational efficiency, and ultimately improve the overall
quality of patient care.
                        </p>
                        <a href="assets/images/ABOUT MOUNT TECH SOLUTIONS.pdf" target="_blank" className="btn btn-default btn-radius">
                           View <AiOutlineCloudDownload />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-3">
                    <img
                      src="assets/images/whitepaper.png"
                      alt=""
                      className="pt-3 pb-3"
                    ></img>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation="fadeInRight"
              data-animation-delay="1.5s"
            >
              <img
                src="assets/images/doctor_nurse.png"
                alt=""
                className="new_image_css"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
