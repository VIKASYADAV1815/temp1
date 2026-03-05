import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import LogoCloud from "@/components/logoCloud";
import FeatureBento from "@/components/features/featureBento";
import LiveWorkflow from "@/components/liveflow";
import SafetyApprovals from "@/components/safetyApprovals";
import SaaSPrecisionPricing from "@/components/pricing";
import SaaSPrecisionFooter from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <FeatureBento />
      <LiveWorkflow />
      <SafetyApprovals />
      <SaaSPrecisionPricing />
      <SaaSPrecisionFooter />
    </>
  );
}
