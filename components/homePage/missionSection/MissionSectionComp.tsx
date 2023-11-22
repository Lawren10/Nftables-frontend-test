import React from "react";
import { TbHexagonFilled } from "react-icons/tb";

const MissionSectionComp = (): React.JSX.Element => {
 return (
  <>
   <section
    className="nf-section-box mb-20 lg:row-start-2 lg:row-end-2 lg:mb-0 lg:mt-20"
    aria-label="mission section"
   >
    <main className="ms-main-box ">
     {/* section left box */}
     <section className="ms-inner-left-box">
      <div className="ms-left-box-overlay"></div>
      <h3 className="w-3/4 lg:w-[58%] md:w-full">
       <span className="lg:hidden">
        Our vision is to support the innovation of AI blockchain projects{" "}
        <span className="nf-text-gradient">
         while prioritizing communities and democratizing profits
        </span>
       </span>

       <span className="hidden lg:inline">
        our mission is to provide unique, confidential AI-based tools, to which
        you will gain{" "}
        <span className="nf-text-gradient">
         lifetime access through NFT tokens and our CREON token.
        </span>
       </span>
      </h3>
     </section>

     {/* section right box */}
     <section className="ms-inner-right-box">
      {/* acordion 1 */}
      <section className="accordion-tab">
       <input
        type="checkbox"
        name="nf-accordion"
        id="Profitability and Growth"
       />
       <label htmlFor="Profitability and Growth" className="accordion-header">
        <div className="accordion-icon-box">
         <i className="icon-border center-icon">
          <TbHexagonFilled />
         </i>
         <i className="icon-inner-box center-icon">
          <TbHexagonFilled />
         </i>
         <i className="ms-icon center-icon">
          <svg
           width=""
           height=""
           viewBox=""
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M15.2727 0V1.71431H17.7411L11.4545 7.35939L8.59091 4.78792L0.279653 12.2511L1.62944 13.4632L8.59091 7.21198L11.4545 9.78345L19.0909 2.9263V5.14284H21V0H15.2727ZM15.2727 9.42853V24H21V9.42853H15.2727ZM7.63636 12.8572V24H13.3636V12.8572H7.63636ZM0 15.4285V24H5.72727V15.4285H0Z"
            fill="white"
           />
          </svg>
         </i>
        </div>

        <h4 className="lg:w-[30%]">Profitability and Growth</h4>
       </label>
       <article className="accordion-content-box">
        <p>
         At Creon, we handpick cutting-edge AI projects and offer our community
         and token holders early access and investment opportunities. Our
         community actively contributes to the growth and profitability of these
         projects, creating a dynamic ecosystem of innovation and shared
         success.
        </p>
       </article>
      </section>

      {/* accordion 2 */}
      <section className="accordion-tab">
       <input
        type="checkbox"
        name="nf-accordion"
        id="Transparent & Fair Decentralized Earnings"
       />
       <label
        htmlFor="Transparent & Fair Decentralized Earnings"
        className="accordion-header"
       >
        <div className="accordion-icon-box">
         <i className="icon-border center-icon">
          <TbHexagonFilled />
         </i>
         <i className="icon-inner-box center-icon">
          <TbHexagonFilled />
         </i>
         <i className="ms-icon center-icon">
          <svg
           width="26"
           height="26"
           viewBox="0 0 26 26"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <g clip-path="url(#clip0_2620_225)">
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M10.0208 20.0416C15.5552 20.0416 20.0417 15.5552 20.0417 10.0208C20.0417 9.68774 20.0254 9.35846 19.9937 9.03373C18.813 8.34982 17.4418 7.95832 15.9792 7.95832C11.5494 7.95832 7.95834 11.5494 7.95834 15.9791C7.95834 17.4418 8.34984 18.813 9.03375 19.9936C9.35849 20.0254 9.68777 20.0416 10.0208 20.0416ZM6.5688 19.4312C6.1739 18.355 5.95834 17.1922 5.95834 15.9791C5.95834 10.4448 10.4448 5.95832 15.9792 5.95832C17.1923 5.95832 18.355 6.17389 19.4312 6.56879C18.0245 2.73522 14.3421 0 10.0208 0C4.48648 0 0 4.48647 0 10.0208C0 14.3421 2.73522 18.0245 6.5688 19.4312Z"
             fill="white"
            />
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M9.03331 19.9937C8.17532 19.9098 7.34907 19.7177 6.56836 19.4312C7.97507 23.2648 11.6575 26 15.9787 26C21.5131 26 25.9996 21.5135 25.9996 15.9792C25.9996 11.658 23.2644 7.97555 19.4308 6.56885C19.7173 7.34955 19.9094 8.17581 19.9932 9.03379C22.3884 10.4212 23.9996 13.0121 23.9996 15.9792C23.9996 20.409 20.4085 24 15.9787 24C13.0116 24 10.4207 22.3889 9.03331 19.9937Z"
             fill="white"
            />
           </g>
           <defs>
            <clipPath id="clip0_2620_225">
             <rect width="26" height="26" fill="white" />
            </clipPath>
           </defs>
          </svg>
         </i>
        </div>

        <h4 className="w-3/4">Transparent & Fair Decentralized Earnings</h4>
       </label>
       <article className="accordion-content-box">
        <p>
         The key element of our proposal is the continuous access to distributed
         and decentralized earnings generated by AI tools that we provide
         through their creation or investment in them. This decentralized
         structure ensures greater transparency and fairness to all participants
         in the Creon ecosystem.
        </p>
       </article>
      </section>

      {/* accordion 3 */}
      <section className="accordion-tab">
       <input type="checkbox" name="nf-accordion" id="Launching the future" />
       <label htmlFor="Launching the future" className="accordion-header">
        <div className="accordion-icon-box">
         <i className="icon-border center-icon">
          <TbHexagonFilled />
         </i>
         <i className="icon-inner-box center-icon">
          <TbHexagonFilled />
         </i>
         <i className="ms-icon center-icon lg:hidden">
          <svg
           width="26"
           height="26"
           viewBox="0 0 26 26"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M24.8737 1.32566C24.864 1.27824 24.8409 1.23459 24.8072 1.19983C24.7735 1.16507 24.7306 1.14064 24.6836 1.12941C21.5458 0.36156 14.2959 3.09783 10.368 7.02769C9.66742 7.72324 9.02874 8.47857 8.45921 9.28512C7.24795 9.17788 6.03668 9.26743 5.00434 9.71784C2.09162 11.001 1.24357 14.3491 1.00732 15.7893C0.993916 15.8682 0.998971 15.949 1.02208 16.0256C1.0452 16.1021 1.08574 16.1722 1.14052 16.2304C1.19529 16.2887 1.26282 16.3333 1.33778 16.361C1.41274 16.3887 1.49308 16.3986 1.5725 16.3899L6.2499 15.8735C6.25324 16.2265 6.27451 16.579 6.31365 16.9298C6.33718 17.1734 6.44523 17.4011 6.61901 17.5733L8.43028 19.3819C8.60247 19.5556 8.82984 19.6637 9.07315 19.6875C9.42167 19.7266 9.77195 19.7479 10.1226 19.7514L9.60941 24.4271C9.60085 24.5066 9.6108 24.5869 9.63847 24.6619C9.66615 24.7369 9.7108 24.8044 9.76893 24.8592C9.82706 24.914 9.89708 24.9546 9.9735 24.9778C10.0499 25.0009 10.1307 25.0061 10.2094 24.9928C11.6457 24.7622 14.9966 23.9134 16.2711 20.998C16.7211 19.9648 16.8133 18.7583 16.7093 17.5518C17.5171 16.9818 18.2737 16.3423 18.9706 15.6408C22.9109 11.7168 25.6291 4.62226 24.8737 1.32566ZM15.0395 10.9597C14.6797 10.5998 14.4346 10.1412 14.3353 9.6419C14.2359 9.14258 14.2867 8.62499 14.4813 8.1546C14.6759 7.6842 15.0055 7.28213 15.4284 6.99924C15.8513 6.71635 16.3485 6.56536 16.8572 6.56536C17.3659 6.56536 17.8631 6.71635 18.286 6.99924C18.7089 7.28213 19.0385 7.6842 19.2331 8.1546C19.4277 8.62499 19.4785 9.14258 19.3791 9.6419C19.2798 10.1412 19.0347 10.5998 18.6749 10.9597C18.4363 11.1988 18.153 11.3886 17.8411 11.518C17.5292 11.6474 17.1948 11.7141 16.8572 11.7141C16.5195 11.7141 16.1852 11.6474 15.8733 11.518C15.5614 11.3886 15.2781 11.1988 15.0395 10.9597Z"
            fill="white"
           />
           <path
            d="M8.58339 20.4688C8.28375 20.7691 7.80312 20.8861 7.22461 20.9862C5.92488 21.2077 4.77716 20.0844 5.01064 18.7702C5.09977 18.272 5.36333 17.5737 5.52736 17.4096C5.56322 17.3744 5.58708 17.3289 5.59557 17.2794C5.60406 17.2299 5.59673 17.1789 5.57464 17.1338C5.55254 17.0887 5.5168 17.0517 5.47249 17.0281C5.42817 17.0045 5.37754 16.9954 5.32778 17.0022C4.60096 17.0911 3.92479 17.4207 3.4069 17.9384C2.12139 19.2252 2 24 2 24C2 24 6.77679 23.8786 8.0623 22.5918C8.58156 22.0743 8.9115 21.3969 8.99895 20.669C9.01919 20.4404 8.74087 20.3042 8.58339 20.4688Z"
            fill="white"
           />
          </svg>
         </i>
        </div>

        <h4 className="w-[30%] lg:w-[60%]">
         <span className="lg:hidden">Launching the future</span>
         <span className="hidden lg:inline">
          Early Engagement in Tokenized AI Projects
         </span>
        </h4>
       </label>
       <article className="accordion-content-box">
        <p>
         What&apos;s more, Creon is pioneering in offering the first known
         opportunity to acquire allocations in tokenised AI projects through our
         Creon Launchpad platform. This gives investors a unique chance for
         early engagement in the most promising AI projects, opening the door to
         potentially high returns.
        </p>
       </article>
      </section>

      {/* accordion 4 */}
      <section className="accordion-tab">
       <input
        type="checkbox"
        name="nf-accordion"
        id="Limitless Possibilities of AI & Crypto"
       />
       <label
        htmlFor="Limitless Possibilities of AI & Crypto"
        className="accordion-header"
       >
        <div className="accordion-icon-box">
         <i className="icon-border center-icon">
          <TbHexagonFilled />
         </i>
         <i className="icon-inner-box center-icon">
          <TbHexagonFilled />
         </i>
         <i className="ms-icon center-icon">
          <svg
           width="26"
           height="26"
           viewBox="0 0 26 26"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M26 13C26.0002 14.1866 25.6313 15.3467 24.94 16.3334C24.2487 17.3201 23.2661 18.0892 22.1164 18.5433C20.9667 18.9974 19.7016 19.1162 18.4812 18.8847C17.2607 18.6531 16.1396 18.0816 15.2598 17.2425L15.2084 17.1895L8.9318 10.4313C8.40115 9.93456 7.72847 9.59833 6.99816 9.46481C6.26785 9.3313 5.51246 9.40645 4.82678 9.68083C4.1411 9.95522 3.55568 10.4166 3.14398 11.0071C2.73229 11.5976 2.51266 12.2909 2.51266 13C2.51266 13.7091 2.73229 14.4024 3.14398 14.9929C3.55568 15.5834 4.1411 16.0448 4.82678 16.3192C5.51246 16.5935 6.26785 16.6687 6.99816 16.5352C7.72847 16.4017 8.40115 16.0654 8.9318 15.5687L9.25475 15.2207C9.36429 15.1026 9.49716 15.0061 9.64578 14.9369C9.79441 14.8677 9.95587 14.8271 10.121 14.8174C10.286 14.8077 10.4515 14.8291 10.6079 14.8804C10.7643 14.9316 10.9086 15.0118 11.0326 15.1162C11.1565 15.2207 11.2576 15.3474 11.3302 15.4891C11.4028 15.6309 11.4454 15.7848 11.4555 15.9423C11.4657 16.0997 11.4433 16.2575 11.3895 16.4066C11.3357 16.5558 11.2517 16.6934 11.1421 16.8115L10.7909 17.1895L10.7395 17.2425C9.85959 18.0814 8.7386 18.6527 7.51824 18.8841C6.29788 19.1155 5.03297 18.9966 3.88346 18.5425C2.73394 18.0884 1.75144 17.3195 1.0602 16.3329C0.368949 15.3464 0 14.1865 0 13C0 11.8135 0.368949 10.6536 1.0602 9.66708C1.75144 8.68053 2.73394 7.91159 3.88346 7.45749C5.03297 7.00339 6.29788 6.88452 7.51824 7.11592C8.7386 7.34732 9.85959 7.9186 10.7395 8.75751L10.7909 8.8105L17.0675 15.5687C17.5981 16.0654 18.2708 16.4017 19.0011 16.5352C19.7314 16.6687 20.4868 16.5935 21.1725 16.3192C21.8581 16.0448 22.4436 15.5834 22.8553 14.9929C23.267 14.4024 23.4866 13.7091 23.4866 13C23.4866 12.2909 23.267 11.5976 22.8553 11.0071C22.4436 10.4166 21.8581 9.95522 21.1725 9.68083C20.4868 9.40645 19.7314 9.3313 19.0011 9.46481C18.2708 9.59833 17.5981 9.93456 17.0675 10.4313L16.7445 10.7793C16.635 10.8974 16.5021 10.9939 16.3535 11.0631C16.2048 11.1323 16.0434 11.1729 15.8783 11.1826C15.7132 11.1923 15.5477 11.1709 15.3913 11.1196C15.2349 11.0684 15.0906 10.9882 14.9667 10.8838C14.8428 10.7793 14.7416 10.6526 14.6691 10.5109C14.5965 10.3691 14.5539 10.2152 14.5437 10.0577C14.5335 9.90032 14.556 9.74253 14.6098 9.59338C14.6635 9.44423 14.7476 9.30663 14.8571 9.18846L15.2084 8.8105L15.2598 8.75751C16.1396 7.91835 17.2607 7.34686 18.4812 7.11532C19.7016 6.88377 20.9667 7.00258 22.1164 7.45671C23.2661 7.91084 24.2487 8.67989 24.94 9.6666C25.6313 10.6533 26.0002 11.8134 26 13Z"
            fill="white"
           />
          </svg>
         </i>
        </div>

        <h4 className="w-2/4">Limitless Possibilities of AI & Crypto</h4>
       </label>
       <article className="accordion-content-box">
        <p>
         The possibilities offered by the integration of AI and cryptocurrencies
         are limitless, and we&apos;re just beginning to explore them. As
         pioneers, our journey into uncharted territory is fraught with
         challenges, but the rewards promise to be equally extraordinary. Creon
         isn&apos;t just about profiting from technological innovation;
         it&apos;s about being part of the process that brings these innovations
         to life.
        </p>
       </article>
      </section>
     </section>
    </main>
   </section>
  </>
 );
};

export default MissionSectionComp;
