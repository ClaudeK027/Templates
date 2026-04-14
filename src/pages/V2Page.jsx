import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import BackToSelector from '@/components/common/BackToSelector';
import HeroV2 from '@/components/v2/HeroV2';
import NetworksV2 from '@/components/v2/NetworksV2';
import StatsV2 from '@/components/v2/StatsV2';
import HowItWorksV2 from '@/components/v2/HowItWorksV2';
import FeaturesV2 from '@/components/v2/FeaturesV2';
import TrustV2 from '@/components/v2/TrustV2';
import PricingV2 from '@/components/v2/PricingV2';
import TestimonialsV2 from '@/components/v2/TestimonialsV2';
import FinalCtaV2 from '@/components/v2/FinalCtaV2';

export default function V2Page() {
  return (
    <div className="font-inter" style={{ overflowX: 'hidden' }}>
      <Navbar variant="v2" />
      <div className="v2-sections" style={{ display: 'flex', flexDirection: 'column' }}>
        <HeroV2 />
        <NetworksV2 />
        <StatsV2 />
        <HowItWorksV2 />
        <FeaturesV2 />
        <TrustV2 />
        <PricingV2 />
        <TestimonialsV2 />
        <FinalCtaV2 />
      </div>
      <Footer variant="v2" />
      <BackToSelector variant="v2" />
    </div>
  );
}
