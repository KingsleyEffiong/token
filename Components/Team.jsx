import React from "react";
import { BiMenu } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";


const Team = () => {
  const TwitterXIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fontSize="20px">
<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" stroke="#ffffff" ></path>
</svg>
  );
  return <section id="team"> 
      <div className="container-fluid text-align-center">
          <div className="title_default_light title_border text-center">
        <h4 className='animation animated fadeInUp' data-animation="fadeInUp" data-animation-delay="0.2s">MEET OUR TEAM</h4>
        </div>
        <div className="row justify-content-center align-items-center m-5">
          <div className="div">
            <img src="assets/images/person11.png" alt=""  className="div_persons"/>
            <div className="profile">
            {/* <p>Founder & CEO</p> */}
            <h6 style={{
              margin:"0",
              marginTop:"1em"
            }}>James Anthony</h6>
            <p style={{
              margin:"0"
            }}>Founder & CEO</p>
          <a href="https://twitter.com/james4solution" target="blank"> <TwitterXIcon style={{
              color:"#ffbf00",
            fontSize:"30px",
              cursor:"pointer",
              cursor:"pointer"
            }}/>
            </a> 
            </div>
          </div>
          <div className="div">
            <img src="assets/images/person2.png" alt=""  className="div_persons"/>
            <div className="profile">
             <h6 style={{
              margin:"0",
              marginTop:"1em"
            }}>Peter Brooks</h6>
        <p style={{
              margin:"0"
            }}>Co-Founder</p>
            <a href="https//www.facebook.com/realpeterbrooks?mibextid=LQQJ4d"></a> <FaFacebook style={{
            fontSize:"20px",
              cursor:"pointer",
              cursor:"pointer"
            }}/> 
            </div>
          </div>
          <div className="div">
            <img src="assets/images/person3.png" alt=""  className="div_persons"/>
            <div className="profile">
            {/* <p>Founder & CEO</p> */}
             <h6 style={{
              margin:"0",
              marginTop:"1em"
            }}>Dr. Mary Allen</h6>
            <p style={{
              margin:"0"
            }}>Specialist</p>
              <a href="https://twitter.com/drmaryallen" target="blank"> <TwitterXIcon style={{
              color:"#ffbf00",
            fontSize:"30px",
              cursor:"pointer",
              cursor:"pointer"
            }}/>
            </a>
            </div>
          </div>
          <div className="div">
            <img src="assets/images/person4.png" alt=""  className="div_persons"/>
            <div className="profile">
             <h6 style={{
              margin:"0",
              marginTop:"1em"
            }}>Dr. Christpher Collins</h6>
            <p style={{
              margin:"0"
            }}>C.M.O</p>
              {/* <TwitterXIcon style={{
              color:"#ffbf00",
            fontSize:"30px",
              cursor:"pointer"
            }}/> */}
            </div>
          </div>
        </div>
      </div>
  </section>;
};

export default Team;
