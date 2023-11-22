import HeroSectionComp from "@/components/homePage/heroSection/HeroSectionComp";
import CreonPassSectonComp from "@/components/homePage/creonPassSection/CreonPassSectonComp";
import ProfitingSectionComp from "@/components/homePage/profitingSection/ProfitingSectionComp";
import MissionSectionComp from "@/components/homePage/missionSection/MissionSectionComp";
import ComingSoonComp from "@/components/homePage/comingSoonSection/ComingSoonComp";
import MarketSectionComp from "@/components/homePage/marketSection/MarketSectionComp";
import FooterSecton from "@/components/homePage/footerSection/FooterSecton";

export default function Home() {
 return (
  <>
   <section className="home-page-contianer">
    <HeroSectionComp />
    <CreonPassSectonComp />
    <ProfitingSectionComp />
    <MissionSectionComp />
    <ComingSoonComp />
    <MarketSectionComp />
    <FooterSecton />
   </section>
  </>
 );
}

// lg:border lg:border-red-500
