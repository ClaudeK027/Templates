import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToSelector from '../components/common/BackToSelector';
import HeroV1 from '../components/v1/HeroV1';
import NetworksV1 from '../components/v1/NetworksV1';
import HowItWorksV1 from '../components/v1/HowItWorksV1';
import StatsV1 from '../components/v1/StatsV1';
import FeaturesV1 from '../components/v1/FeaturesV1';
import PricingV1 from '../components/v1/PricingV1';
import TestimonialsV1 from '../components/v1/TestimonialsV1';
import TrustV1 from '../components/v1/TrustV1';
import FinalCtaV1 from '../components/v1/FinalCtaV1';

export default function V1Page() {
  return (
    <div className="font-poppins">
      <Navbar variant="v1" />
      <HeroV1 />
      <NetworksV1 />
      <HowItWorksV1 />
      <StatsV1 />
      <FeaturesV1 />
      <PricingV1 />
      <TestimonialsV1 />
      <TrustV1 />
      <FinalCtaV1 />
      <Footer variant="v1" />
      <BackToSelector variant="v1" />
    </div>
  );
}
