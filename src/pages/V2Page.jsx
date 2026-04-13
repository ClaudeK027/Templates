import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToSelector from '../components/common/BackToSelector';
import HeroV2 from '../components/v2/HeroV2';
import NetworksV2 from '../components/v2/NetworksV2';
import HowItWorksV2 from '../components/v2/HowItWorksV2';
import StatsV2 from '../components/v2/StatsV2';
import FeaturesV2 from '../components/v2/FeaturesV2';
import PricingV2 from '../components/v2/PricingV2';
import TestimonialsV2 from '../components/v2/TestimonialsV2';
import TrustV2 from '../components/v2/TrustV2';
import FinalCtaV2 from '../components/v2/FinalCtaV2';

export default function V2Page() {
  return (
    <div className="font-inter">
      <Navbar variant="v2" />
      <HeroV2 />
      <NetworksV2 />
      <StatsV2 />
      <HowItWorksV2 />
      <FeaturesV2 />
      <TrustV2 />
      <PricingV2 />
      <TestimonialsV2 />
      <FinalCtaV2 />
      <Footer variant="v2" />
      <BackToSelector variant="v2" />
    </div>
  );
}
