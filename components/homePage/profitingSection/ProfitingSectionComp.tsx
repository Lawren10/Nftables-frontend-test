import React from "react";

const ProfitingSectionComp = (): React.JSX.Element => {
 return (
  <>
   <section
    className="nf-section-box mt-40 lg:row-start-3 lg:row-end-3 lg:-mt-24 md:mt-10 sm:-mt-20"
    aria-label="profiting section"
   >
    <h1>Profiting Through</h1>
    <h2 className="">AI Innovation & Decentralization</h2>
    <main className="nf-flex-container ps-flex-box ">
     <section className="ps-flex-left-box">
      <figure className="ps-figure">
       <div className="ps-figure-overlay"></div>
      </figure>
     </section>

     <section className="ps-flex-right-box">
      <article className="ps-article-box">
       <h4>
        <span className="lg:hidden">
         The dynamic community driven business model of the future.
        </span>

        <span className="hidden lg:inline">
         A Dynamic Business Model for Sustainable Growth and Community
         Engagement
        </span>
       </h4>
       <p className="mt-4">
        <span className="lg:hidden">
         At Creon, we blend the power of AI tools with the dynamic crypto and
         NFT markets, utilizing an innovative business model to drive
         profitability. This approach empowers our community, as our NFT and
         token holders directly benefit from the growth and prosperity of the
         Creon network, creating a win-win scenario for both our community and
         for the projects we launch.
        </span>
        <span className="hidden lg:inline">
         At Creon, we merge AI tools with the crypto and NFT markets, leveraging
         a dynamic business model to generate profits. Our commitment to
         innovation and decentralization allows us to strengthen our market
         position and foster a sustainable ecosystem. We empower our community,
         ensuring transparency and actively involving NFT holders in our
         success.
        </span>
       </p>
      </article>
     </section>
    </main>
   </section>
  </>
 );
};

export default ProfitingSectionComp;
