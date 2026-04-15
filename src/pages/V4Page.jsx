import NavbarV4 from '@/components/v4/NavbarV4';
import HeroV4 from '@/components/v4/HeroV4';
import AfricaV4 from '@/components/v4/AfricaV4';
import TalentsV4 from '@/components/v4/TalentsV4';
import MissionsV4 from '@/components/v4/MissionsV4';
import DashboardV4 from '@/components/v4/DashboardV4';
import ProCreatorV4 from '@/components/v4/ProCreatorV4';
import FeaturesV4 from '@/components/v4/FeaturesV4';
import ProcessV4 from '@/components/v4/ProcessV4';
import TrustV4 from '@/components/v4/TrustV4';
import EarlyAdoptersV4 from '@/components/v4/EarlyAdoptersV4';
import FooterV4 from '@/components/v4/FooterV4';
import BackToSelector from '@/components/common/BackToSelector';

export default function V4Page() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: 'hidden', position: 'relative' }}>
      <div className="influta-grain-overlay" />
      <NavbarV4 />
      <HeroV4 />
      <AfricaV4 />
      <TalentsV4 />
      <MissionsV4 />
      <DashboardV4 />
      <ProCreatorV4 />
      <FeaturesV4 />
      <ProcessV4 />
      <TrustV4 />
      <EarlyAdoptersV4 />
      <FooterV4 />
      <BackToSelector variant="v4" />
    </div>
  );
}
