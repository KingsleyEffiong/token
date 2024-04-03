import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  const MenuList = [
    {
      menu: "Home",
      link: '#home'
    },
    // {
    //   menu: "Our Services",
    //   link: '#service'
    // },
    {
      menu: "About",
      link: '#mountech_token'
    },
    {
      menu: "ICO",
      link: '#ico',
    },
    {
      menu: "Tokenomics",
      link: '#tokenomics'
    },
    {
      menu: "RoadMap",
      link: '#roadmap'
    },
    // {
    //   menu: "Mount Tech Token",
    //   link: '#mountech_token'
    // },
    {
      menu: 'Team',
      link: '#team',
    },
    {
      menu: "Eco System",
      link: '#eco_system'
    },
    // {
    //   menu: "Staking",
    //   link: '#staking'
    // },
    {
      menu: "Our Policies",
      link: 'assets/images/Privacy policy .pdf'
    },
  ];
  const TwitterXIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fontSize="20px">
    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" stroke="#ffffff" ></path>
    </svg>
      );
  return (

  <footer>
    <div className="top_footer bg_light_dark" data-z-index="1" data-parallax="scroll" data-imge-src="asserts/images/footer_bg.png">

  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md 12">
        <div className="footer_logo mb-3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <a href="" className="page-scroll">
            <img src="assets/images/logo_mountech.png" alt="" className="logo_light1"/>
          </a>
        </div>
        {/* <div className="footer_desc">
          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit, accusantium alias eligendi voluptatum, ab optio soluta veritatis culpa fugit voluptatem praesentium sunt quas deleniti impedit. Modi praesentium quaerat necessitatibus.
          </p>
        </div> */}
      </div>
      <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
        <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">
        Quick Links
        </h4>
        <ul className="footer_link">
        {MenuList.map((menu, i) => (
                  <li key={i + 1} className="animation" data-animation="fadeInDown" data-animation-delay={`1.${i + 1}s`}>
                    <a href={menu.link} className="nav-link">{menu.menu}</a>
                  </li>
                ))}
        </ul>
      </div>
      <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
        <div className="newsletter_form">
          <h4 className="footer_title border_title animation">
            Customer Support 
          </h4>
          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
          For more infomation message us on our Support  Email - @mounttechsolutions.tech
          </p>
          {/* <form action="" className="subscribe_form_animation" data-animation="fadeInUp" data-animation-delay="0.4s">
            <input type="text" required placeholder="Enter Email Address"  className="input-rounded"/>
            <button type="submit" title="Subscribe" className="btn-info" name="submit" value="Submit">Message us</button>
          </form> */}
        </div>
      </div>
    </div>
  </div>
    </div>
  <div className="bottom_footer">
    <div className="container">
      <div className="row">
      <div className="col-md-6">
        <p className="copyright">
          Copyright &copy; 2024 All Right reserved by @mounttechsolutions
        </p>
      </div>
     <div className="col-md-6">
      <ul className="list_none footer_menu">
        {/* <li>
          <a href="f">Privacy Policy</a>
        </li> */}
        <li>
          <a href="assets/images/Privacy policy .pdf" target="blanck">Terms & Conditions</a>
          </li>
            <li>
            <a href="https://www.facebook.com/profile.php?id=61555876704614" target="blank"> <FaFacebook style={{
              // color:"#ffbf00",
            fontSize:"20px",
              cursor:"pointer",
              cursor:"pointer"
            }}/> 
            </a>
            </li>
        <li>
        <a href="https://t.me/+o0-w-_44_rdkYTQ0" target="blank"> <FaTelegram style={{
              // color:"#ffbf00",
            fontSize:"20px",
              cursor:"pointer",
              cursor:"pointer"
            }}/>
            </a>
        </li>
            <li>
        <a href="https://twitter.com/Mounttechsol" target="blank"> <TwitterXIcon style={{
              color:"#fff",
              cursor:"pointer",
              cursor:"pointer"
            }}/>
            </a>
        </li>
      </ul>
     </div>
     </div>
    </div>
  </div>
  </footer>
  )
};

export default Footer;
