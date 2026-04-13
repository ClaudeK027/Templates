import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToSelector from '../components/common/BackToSelector';
import HeroV3 from '../components/v3/HeroV3';
import NetworksV3 from '../components/v3/NetworksV3';
import HowItWorksV3 from '../components/v3/HowItWorksV3';
import StatsV3 from '../components/v3/StatsV3';
import FeaturesV3 from '../components/v3/FeaturesV3';
import PricingV3 from '../components/v3/PricingV3';
import TestimonialsV3 from '../components/v3/TestimonialsV3';
import TrustV3 from '../components/v3/TrustV3';
import FinalCtaV3 from '../components/v3/FinalCtaV3';

export default function V3Page() {
  return (
    <div className="font-poppins">
      <Navbar variant="v3" />
      <HeroV3 />
      <NetworksV3 />
      <HowItWorksV3 />
      <StatsV3 />
      <FeaturesV3 />
      <PricingV3 />
      <TestimonialsV3 />
      <TrustV3 />
      <FinalCtaV3 />
      <Footer variant="v3" />
      <BackToSelector variant="v3" />
    </div>
  );
}
