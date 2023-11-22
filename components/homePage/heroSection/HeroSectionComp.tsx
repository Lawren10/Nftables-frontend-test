import React from "react";
import NavComp from "@/components/navigation/NavComp";

const HeroSectionComp = (): React.JSX.Element => {
 return (
  <>
   <header className="hero-section-container " aria-label="welcome section">
    <div className="article-overlay hidden lg:block"></div>
    <NavComp />

    <article className="header-article">
     <h1>
      <span className="lg:hidden">
       The world&#39;s first platform for Tokenizing AI blockchain projects
      </span>

      <span className="hidden lg:block">
       Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
      </span>
     </h1>

     <div className="subtitle-box">
      <div className="subtitle-rule mt-6 mb-1 "></div>
      <h5 className="pl-2">
       <span className="lg:hidden">
        Hold the Creon Pass NFT and earn passive income from AI Tools
       </span>
       <span className="hidden lg:block">
        Creon «Create On» confidential AI Tools for granting access through
        NFTs.
       </span>
      </h5>
      <div className="subtitle-rule mt-1"></div>
     </div>
    </article>
   </header>
  </>
 );
};

export default HeroSectionComp;
