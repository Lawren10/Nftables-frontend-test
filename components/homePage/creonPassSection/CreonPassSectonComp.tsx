import React from "react";
import Image from "next/image";
import creonPassImage from "@/public/images/creonPassImg.png";

const CreonPassSectonComp = (): React.JSX.Element => {
 return (
  <>
   <section
    className="nf-section-box md:pb-80"
    aria-label="creon pass nft deliverables"
   >
    <main className="nf-flex-container cps-flex-box">
     <section className="cps-flex-left-box">
      <h1>creon pass nft</h1>
      <hr className="border border-nf-gray my-6" />
      <h5>
       <span className="lg:hidden">
        The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
        and a ticket to generate passive income through AI-driven tools
       </span>
       <span className="hidden lg:block">
        Access to confidential AI tools enabling business optimization and
        development. Only NFT holders will have the ability to use a given tool.
       </span>
      </h5>
      <ul className="cps-list-box lg:hidden">
       <li className="cps-list-item">
        Pre-launch investment opportunities for upcoming AI projects
       </li>
       <li className="cps-list-item">
        Free and early access to Creon built AI projects
       </li>
       <li className="cps-list-item">
        Higher allocation limits on the Creon AI Launchpad
       </li>
       <li className="cps-list-item">
        Revenue share distribution from Creon built AI projects
       </li>
      </ul>
      <ul className="cps-list-box-grid hidden lg:grid">
       <li className="cps-list-item col-span-2 md:col-span-1 sm:col-span-2">
        Prospect to derive financial benefits through the redistributed profit
        generated from AI tools, but only when the majority of NFT holders
        decide to release the tool publicly.
       </li>
       <li className="cps-list-item">
        The possibility of allocating investments into new, exceptional
        tokenized AI tools through Creon Launchpad.
       </li>
       <li className="cps-list-item">
        Early access to allocations in inspiring tokenized projects, real
        businesses based on AI.
       </li>
      </ul>
      <button className="nf-button">
       <div className="nf-button-text">
        <span className="py-2 block">Buy Creon Pass</span>
        <span className="py-2 block">Buy Creon Pass</span>
       </div>
      </button>
     </section>

     <section className="cps-flex-right-box">
      <div className="lg:hidden">
       <Image width={900} height={900} alt="" src={creonPassImage} />
      </div>
     </section>
    </main>
   </section>
  </>
 );
};

export default CreonPassSectonComp;
