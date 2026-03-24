import ClientSlider from "../Components/ClientSilder";
import Hero from "../Components/Hero";
import ServicesGrid from "../Components/ServiceGrid";
import StatsSection from "../Components/StatsSection";
import WorkGallery from "../Components/WorkGallery";
import EmergencyCTA from "../Components/EmergencyCTA";
import OperationalMap from "../Components/OperationMap";
import TestimonialSection from "../Components/TestimonialSection";
function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <OperationalMap />
      <ServicesGrid />
      <ClientSlider />
      <TestimonialSection />
      <WorkGallery />
      <EmergencyCTA />
    </main>
  );
}
export default Home;
