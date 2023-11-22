/* eslint-disable @next/next/no-img-element */
import React from "react";

const MarketSectionComp = (): React.JSX.Element => {
 return (
  <>
   <section
    className={`nf-section-box mks-box lg:row-start-4 lg:row-end-4`}
    aria-label="creon pass market offers"
   >
    <main className="nf-flex-container-col mks-flex-box">
     {/* card 1 */}
     <section className="mk-card">
      <article className="mk-card-left-box">
       <h3>AI Prospects, Market Size, and Development Pace</h3>
       <p className="mt-4">
        The AI market is one of the most dynamically growing areas of
        technology. According to reports, the global AI market is expected to
        reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate)
        of 36.6%. The key drivers behind this growth include advancements in
        machine learning, increasing demand for big data analytics, and growing
        adoption of AI technology across various sectors such as healthcare,
        finance, and transportation.
       </p>
      </article>
      <div className="mk-card-right-box">
       <img
        src="/images/ai1.png"
        className="w-full h-full object-cover "
        loading="lazy"
        alt=""
       ></img>
      </div>
     </section>

     {/* card 2 */}
     <section className="mk-card">
      <article className="mk-card-left-box">
       <h3>AI Tools and Market</h3>
       <p className="mt-4">
        AI tools refer to the technologies and software that enable computer
        systems to perform tasks usually requiring human intellect. The market
        for these tools is dynamic and diverse, encompassing areas such as
        Natural Language Processing (NLP), machine learning, computer vision,
        and robotics. With a wide range of applications, AI tools are becoming
        increasingly indispensable in many sectors, from healthcare to finance,
        retail, manufacturing, and many others.
       </p>
      </article>
      <div className="mk-card-right-box">
       <img
        src="/images/ai2.png"
        className="w-full h-full object-cover"
        loading="lazy"
        alt=""
       ></img>
      </div>
     </section>

     {/* card 3 */}
     <section className="mk-card">
      <article className="mk-card-left-box">
       <h3>AI, Crypto, and NFT Market</h3>
       <p className="mt-4">
        Artificial Intelligence and blockchain technology are two groundbreaking
        areas leading new technological innovations. The combination of these
        two technologies creates intriguing possibilities. For instance,
        Non-Fungible Tokens (NFTs) can leverage AI to create unique digital
        artworks or to provide exclusive AI-based services. Meanwhile,
        cryptocurrencies can benefit from AI by improving security mechanisms,
        transaction efficiency, and service personalization. Such combination
        brings substantial benefits for both developers and users, paving the
        way for unprecedented possibilities.
       </p>
      </article>
      <div className="mk-card-right-box">
       <img
        src="/images/ai3.png"
        className="w-full h-full object-cover"
        loading="lazy"
        alt=""
       ></img>
      </div>
     </section>
    </main>
   </section>
  </>
 );
};

export default MarketSectionComp;
