"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const NavComp = (): React.JSX.Element => {
 let [showTab, setShowTab] = useState(false);

 const hanadleShowTab = () => {
  console.log("setting tab");

  setShowTab(!showTab);
 };
 return (
  <>
   <header className="header-contianer" aria-label="site-navigation">
    <i className="logo-box sm:hidden">
     <Image
      width={140}
      height={39}
      src={"/images/Logo.png"}
      alt={"creon logo"}
     />
    </i>

    <i className="logo-box hidden sm:block">
     <Image
      width={120}
      height={33}
      src={"/images/Logo.png"}
      alt={"creon logo"}
     />
    </i>

    <nav className="nav-outter">
     <nav className="nav-inner lg:hidden">
      <button className="nav-link nav-link-hover">Creon Pass</button>
      <button className="nav-link-alt nav-link-hover">Token</button>
      <button className="nav-link-alt nav-link-hover">AI Revenue</button>
      <button className="nav-link-alt nav-link-hover">AI Launchpad</button>
     </nav>
     <button className="nav-link-Button">
      <div className="nav-link-button-text">
       <span className="py-1 block">Connect</span>
       <span className="py-1 block">Connect</span>
      </div>
     </button>

     <button className="side-nav-control-btn">
      <input type="checkbox" id="side-bar-control" />
      <label
       htmlFor="side-bar-control"
       className="nav-toggle"
       onClick={hanadleShowTab}
      >
       <div className="bars" id="bar1"></div>
       <div className="bars" id="bar2"></div>
       <div className="bars" id="bar3"></div>
      </label>
     </button>
    </nav>

    <aside
     className={`${showTab ? "side-nav-box-show" : "side-nav-box"} `}
     id="nf-side-nav"
    >
     <nav className="side-nav-button-list-box">
      <button className="nav-link nav-link-hover">Creon Pass</button>
      <button className="nav-link-alt nav-link-hover">Token</button>
      <button className="nav-link-alt nav-link-hover">AI Revenue</button>
      <button className="nav-link-alt nav-link-hover">AI Launchpad</button>

      <div className="side-nav-social-box">
       <i className="side-nav-social-icon sm:hidden">
        <svg
         width="28"
         height="28"
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M13.1396 1.91927L1.32688 6.99655C0.851518 7.23299 0.690736 7.70649 1.21199 7.96346L4.24245 9.0369L11.5697 3.98953C11.9698 3.67267 12.3794 3.75716 12.027 4.10573L5.73381 10.4567L5.53612 13.1445C5.71922 13.5595 6.05448 13.5614 6.26834 13.3551L8.00943 11.5189L10.9913 14.0077C11.6839 14.4647 12.0608 14.1698 12.2098 13.3321L14.1656 3.00957C14.3687 1.97853 14.0224 1.52424 13.1396 1.91927Z"
          fill="white"
         />
        </svg>
       </i>
       <i className="side-nav-social-icon hidden sm:block">
        <svg
         width="30"
         height="30"
         viewBox="-5 -5 22 22"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M13.1396 1.91927L1.32688 6.99655C0.851518 7.23299 0.690736 7.70649 1.21199 7.96346L4.24245 9.0369L11.5697 3.98953C11.9698 3.67267 12.3794 3.75716 12.027 4.10573L5.73381 10.4567L5.53612 13.1445C5.71922 13.5595 6.05448 13.5614 6.26834 13.3551L8.00943 11.5189L10.9913 14.0077C11.6839 14.4647 12.0608 14.1698 12.2098 13.3321L14.1656 3.00957C14.3687 1.97853 14.0224 1.52424 13.1396 1.91927Z"
          fill="white"
         />
        </svg>
       </i>
       <i className="side-nav-social-icon">
        <FaDiscord />
       </i>
       <i className="side-nav-social-icon">
        <FaTwitter />
       </i>
      </div>
     </nav>
    </aside>
   </header>
  </>
 );
};

export default NavComp;
