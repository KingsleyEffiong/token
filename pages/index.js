import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//INTERNAL  IMPORT
import { useStateContext } from "../Context/index";
import {
  About,
  ArrowUp,
  Banner,
  Contact,
  Distribution,   
  Footer,
  Header,
  Mountech_token,
  Roadmap,
  Service,
  System,
  Team,
  TokeSale,
} from '../Components/index'

const Index = () => {
  const { 
    transferNativeToken, 
        buyToken ,
        TOKEN_ICO, 
        currentHolder,
         tokenSale,
          tokenHolders, 
          connectWallet, 
          setAddress,
           nativeToken, 
           balance, 
           address,
   } = useStateContext();
  return (
    <>
     <div className="v_dark">  </div>
      <Header
       address = {address}
        setAddress =   {setAddress} 
        connectWallet = {connectWallet}/>
        <Banner 
        transferNativeToken = {transferNativeToken}/>
         <Roadmap/>
         <Mountech_token/>
        <About/>
        <Service/>
        <TokeSale buyToken = {buyToken} tokenSale = {tokenSale}/>
        <Distribution/>
        <System/>
        <Team/>
        {/* <Contact/> */}
        <Footer/>

        <div className="video-container">
  <video autoPlay loop controls>
    <source src="assets/images/mount tech video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="content">
    {/* Your content goes here */}
  </div>
</div>


     </>
  );
};

export default Index;
