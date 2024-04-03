import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ address, setAddress, connectWallet, showSidebar }) => {
  const [collapsed, setCollapsed] = useState(true); // State to track navbar collapse

  // Function to toggle navbar collapse
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setCollapsed(true); // Collapse navbar on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideNavbar = () => {
    setCollapsed(true);
  };

  // Function to handle connecting to the wallet (MetaMask or Trust Wallet)
  const handleConnectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.trustWallet !== "undefined") {
         // Trust Wallet is installed, connect to Trust Wallet
         alert("Wallet is installed, connect Wallet");
         const alert = document.createElement('div')
        
        await connectWallet();
      } else if (typeof window.ethereum !== "undefined") {
       // MetaMask is installed, connect to MetaMask
       alert("Wallet is installed, connect to Wallet");
        await connectWallet();
      } else {
        // Neither MetaMask nor Trust Wallet is installed
        console.log("Neither MetaMask nor Trust Wallet is installed");
        alert("Neither MetaMask nor Trust Wallet is installed");
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      alert("Wallet connection error:");
    }
  };

  const MenuList = [
    {
      menu: "Home",
      link: '#home'
    },
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
    {
      menu: 'Team',
      link: '#team',
    },
    {
      menu: "Eco System",
      link: '#eco_system'
    },
    {
      menu: "Our Policies",
      link: 'assets/images/Privacy policy .pdf'
    },
  ];

  return (
    <>
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a href="#home_section" data-animation="fadeInDown" data-animation-delay="1s" className="navbar-brand page-scroll animation">
              <img src="assets/images/logo_mountech.png" alt="logo" className="logo_light1" />
            </a>
            <button
              className="navbar-toggler animation"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={!collapsed ? "true" : "false"}
              aria-label="Toggle navigation"
              data-animation="fadeInDown"
              data-amination-delay="1.1s"
            >
              <BiMenu />
            </button>

            <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                {MenuList.map((menu, i) => (
                  <li key={i + 1} className="animation" data-animation="fadeInDown" data-animation-delay={`1.${i + 1}s`}>
                    <a href={menu.link} className="nav-link" onClick={hideNavbar}>{menu.menu}</a>
                  </li>
                ))}
              </ul>
              <ul className="navbar-nav nav_btn align-items-center">
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="2s"
                >
                  {address ? (
                    <a className="btn btn-default btn-radius nav_item">
                      <small className="new-color">
                        {""}
                        {address.slice(0, 15)}...
                      </small>
                    </a>
                  ) : (
                    <a onClick={handleConnectWallet} className="btn btn-default btn-radius nav_item">
                      <small className="new-color">
                        {""}
                        Connect Wallet
                      </small>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
