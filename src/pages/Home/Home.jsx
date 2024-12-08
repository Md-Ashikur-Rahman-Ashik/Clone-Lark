import AccordionCard from "../../components/AccordionCardComponent";
import AllPlatformSection from "../../components/AllPlatformSection/AllPlatformSection";
import AnythingSection from "../../components/AnythingSection";
import CollaborateSection from "../../components/CollaborateSection/CollaborateSection";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import LarkPerformance from "../../components/LarkPerformance";
import PayLess from "../../components/PayLess";
import PricingComponent from "../../components/PricingComponent";
import ProductivitySection from "../../components/ProductivitySection/ProductivitySection";
import RobustSection from "../../components/RobustSection";
import SavingSection from "../../components/SavingSection";
import SuperAppSection from "../../components/SuperAppSection/SuperAppSection";

const Home = () => {
  return (
    <>
      <CollaborateSection></CollaborateSection>
      <ProductivitySection></ProductivitySection>
      <GlobalSection></GlobalSection>
      <SuperAppSection></SuperAppSection>
      <AllPlatformSection></AllPlatformSection>
      <AnythingSection />
      <SavingSection />
      <LarkPerformance />
      <PricingComponent />
      <RobustSection />
      <AccordionCard />
      <PayLess />
    </>
  );
};

export default Home;
