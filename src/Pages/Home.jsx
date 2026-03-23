import ClientSlider from "../Components/ClientSilder";
import Hero from "../Components/Hero";
import ServicesGrid from "../Components/ServiceGrid";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import WorkGallery from "../Components/WorkGallery";
import EmergencyCTA from "../Components/EmergencyCTA";
import OperationalMap from "../Components/OperationMap";
function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <OperationalMap />
      {/* <WhyChooseUs /> */}

      <ServicesGrid />
      <ClientSlider />
      <WorkGallery />
      <EmergencyCTA />
    </main>
  );
}
export default Home;
