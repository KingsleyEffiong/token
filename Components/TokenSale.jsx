import React , {useState} from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
// import axios from 'axios'

const TokenSale = ({buyToken, tokenSale}) => {
  const [nToken, setNToken] = useState(1);
  const   precentage = (tokenSale?.tokenSold/tokenSale?.tokenSaleBalance) *100;
  const  showPercentage = precentage.toString();
  return <section id="ico" className="section_token token_sale bg_light_dark" data-z-index="1" data-paralax="scroll" data-image-src="" >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
      <div className="title_default_light title_border text-center">
        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          TOKEN SALE
        </h4>
        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          Our initial Coin offering (ICO) for Mount Tech Token (MTT) is structured into four phases, each designed to enable participants to contribute to the development and growth  of our ecosystem while benefiting from exclusive token offerings.
        </p>
      </div>
        </div>
      </div>
      <div className="row align-item-center">
        <div className="col-lg-3">
          <div className="pr_box">
            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Starting Phase 1:
            </h6>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            Apirl 4th, 2024 (THURSDAY 9.00AM (EST))
        </p>
          </div>
          <div className="pr_box">
            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
           Ending Phase 1:
            </h6>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            May 4th, 2024 (SATURDAY 9.00AM (EST))
        </p>
          </div>
          <div className="pr_box">
            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Token exchange rate
            </h6>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            1 Bnb = 5,600 MTT
        </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="token_sale res_md_mb40 res md_mt_40 res_sm_mb_30 res_sm_mt_30" >
            <div className="animation tk_countdown text-center token_countdown_bg" data-animation="fadeInUp" data-animation-delay="0.1s">
              <div className="field_form">
                <div className="row">
                  <div className="form-group col-md-12 animation"  data-animation="fadeInUp" data-animation-delay="1.4s">
                  <input type="number" name="token" id="" required placeholder="1" min={1} className="form-control" onChange={(e)=>setNToken(e.target.value)} />
                </div>
                </div>
              </div>
            <div className="tk_counter_inner" >
              <div className="progress animation" data-animation="fadeInUp" data-animation-delay="1s">
                <div className="progress-bar progress-bar-striped gradient"  role="progressbar" arial-valuenow={`${precentage}`} aria-valuemin={"0"} arial-valuemax={"10"} style={{
                  width:`${precentage}`,
                }}>
                  {showPercentage.slice(0,2)}%
                </div>
                <span className="progress_label bg-white inline_style_1">
                  <strong> {Math.floor(tokenSale?.tokenSold / 10 ** 4)} MTT</strong>
                </span><br/>
                <span className="progress_label bg-white inline_style_2">
                  <strong>{Math.floor(tokenSale?.tokenSaleBalance)}MTT</strong>
                </span>
                <span className="progress_min_val">
                Sale Raised
                </span>
                <span className="progress_max_val">
                Soft Caps
                </span>
              </div>
              <a onClick={()=>buyToken(nToken)} className="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="1s">
                Buy Tokens <BsArrowRight/>
              </a>
              <ul className="icon_list list_none d-flex justify-content-center">
                {/* <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                  <FaEthereum/>
                </li> */}
                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                <span className="new_icon_style">
                    <img src="assets/images/bnb.png" alt=""style={{
                      width:'20px'
                    }}/>  BNB
                  </span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="pr_box">
            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                ICO PHASES
            </h6>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          PHASE 1 = $0.10
        </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          PHASE 2 = $0.20
        </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            PHASE 3 = $0.30
        </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            PHASE 4 = $0.40
        </p>
          </div>
          <div className="pr_box">
    <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
        TOTAL TOKEN SALE
    </h6>
    <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
        {Math.floor(tokenSale?.tokenSold / 10 ** 4)} MTT {showPercentage?.slice(0, 2)}%
    </p>
</div>

        <div className="pr_box">
            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              ACCEPTANCE CURRENCY
            </h6>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            BNB
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className="contianer mt-5">
    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          Token Allocation
        </h4>
    <div className="container-fluid" style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
      }}>
    <div className="row">
    <img src="assets/images/token_lr_2.2c69333b139cae65ce01.png"  className="col-md-6 mt-4" style={{
      width:'600px'
    }} alt="" />
     <p className="animation col-md-6 mt-4" data-animation="fadeInUp" data-animation-delay="0.2s">
          The MTT is allocated startegically to ensure a balanced and sustainable ecosystem within the Mount Tech Solutions platform. With a total token supply of 50,000,000, the allocation is designed to supporrt various aspects of our ecosystem, including development, community engagement, and liquidity provision.</p> 
    </div>
    {/* <img src="assets/images/mount tech gold.png"  className="col-md-6 mt-4 coin2" alt="" /> */}
    </div>
    </div>
  </section>  
};
 
export default TokenSale;
 