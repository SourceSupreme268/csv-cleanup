import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import TrustBar from "@/components/TrustBar";
import UseCases from "@/components/UseCases";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <FeatureGrid />
      <HowItWorks />
      <TrustBar />
      {/* <UseCases />  for version 2 */} 
      <BottomCta />
      <Footer />
    </main>
  );
}