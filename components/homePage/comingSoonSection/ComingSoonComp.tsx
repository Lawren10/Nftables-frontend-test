import React from "react";

const ComingSoonComp = (): React.JSX.Element => {
 return (
  <>
   <section
    className={`nf-section-box cs-main-box`}
    aria-label="items comming soon"
   >
    <main className="nf-flex-container cs-flex-box">
     {/* card 1 */}
     <section className="cs-card">
      <article className="">
       <h3 className="pl-6 lg:pl-4">token</h3>
       <h5 className="pl-8 mt-4 lg:p-4 lg:mt-1">
        <span className="lg:hidden">The Gateway token to the world of AI</span>
        <span className="hidden lg:inline">
         Empowering NFT Holders and Shaping AI Development
        </span>
       </h5>
       <div className="cs-card-figure-box">
        <figure className="cs-card-figure cs-card-figure1"></figure>
       </div>
       <p className="p-8 lg:px-6 lg:py-2">
        <span className="lg:hidden">
         Set to debut in the latter half of 2024, the CREON token serves as the
         pioneering link between cutting-edge AI initiatives and blockchain
         technology. This innovative token provides NFT and token holders with
         unparalleled access to our Launchpad, AI tools, and exclusive
         pre-launch investment prospects.
        </span>
        <span className="hidden lg:inline">
         Launching in the second half of 2024, the CREON token represents first
         bridge between AI tools and blockchain technology, giving NFT holders
         and token users unprecedented access and influence.
        </span>
       </p>
      </article>
     </section>

     {/* card 2 */}
     <section className="cs-card">
      <article className="">
       <h3 className="pl-6 lg:pl-4">
        <span className="lg:hidden">revenue</span>
        <span className="hidden lg:inline">income</span>
       </h3>
       <h5 className="pl-8 mt-4 lg:p-4 lg:mt-1">
        <span className="lg:hidden">
         Driving income and growth through decentralization
        </span>
        <span className="hidden lg:inline">
         Harnessing AI for Profit Generation
        </span>
       </h5>
       <div className="cs-card-figure-box">
        <figure className="cs-card-figure cs-card-figure2"></figure>
       </div>
       <p className="p-8 lg:px-6 lg:py-2">
        <span className="lg:hidden">
         CREON NFT and token holders are integral participants in the
         profit-sharing from our launched AI-based enterprises. We support the
         development of AI tools, ensuring a steady revenue stream, all while
         allowing early investors to enjoy the benefits of their support.
        </span>
        <span className="hidden lg:inline">
         As an integral part of our project, AI Income offers the opportunity to
         benefit from a genuine, profit-generating AI-based business. This facet
         of our initiative leverages the power of selected exclusive AI tools to
         create a profit stream.
        </span>
       </p>
      </article>
     </section>

     {/* card 3 */}
     <section className="cs-card">
      <article className="">
       <h3 className="pl-6 lg:pl-4">launchpad</h3>
       <h5 className="pl-8 mt-4 lg:p-4 lg:mt-1">
        <span className="lg:hidden">Driving the future of AI Innovation</span>
        <span className="hidden lg:inline">
         Unlocking Tokenized AI Projects
        </span>
       </h5>
       <div className="cs-card-figure-box">
        <figure className="cs-card-figure cs-card-figure3"></figure>
       </div>
       <p className="p-8 lg:px-6 lg:py-2">
        <span className="lg:hidden">
         The Creon AI Launchpad, an essential component of our initiative,
         represents a groundbreaking opportunity in the realm of AI and
         blockchain. It provides the first known platform for acquiring
         allocations in tokenized AI projects, offering our community of NFT and
         CREON token holders early access to innovative and promising AI
         endeavors.
        </span>
        <span className="hidden lg:inline">
         AI Launchpad, an essential component of our initiative, represents a
         groundbreaking opportunity in the realm of AI and blockchain. It
         provides the first known platform for acquiring allocations in
         tokenized AI projects, offering our community of NFT and CREON token
         holders early access to innovative and promising AI endeavors.
        </span>
       </p>
      </article>
     </section>
    </main>
   </section>
  </>
 );
};

export default ComingSoonComp;
