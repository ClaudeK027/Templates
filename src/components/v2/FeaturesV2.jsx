import SectionTitle from '../common/SectionTitle';
import FeatureCard from '../common/FeatureCard';
import { creatorBenefits, brandBenefits } from '../../data/content';

export default function FeaturesV2() {
  return (
    <section id="creators" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand section */}
        <div className="mb-20">
          <SectionTitle
            variant="v2"
            tag="Pour les marques"
            title="Recrutez les meilleurs talents."
            subtitle="Des outils de recherche et de gestion conçus pour maximiser le ROI de vos campagnes."
            align="left"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandBenefits.map((b, i) => (
              <FeatureCard key={b.title} {...b} variant="v2" index={i} />
            ))}
          </div>
        </div>

        {/* Creator section */}
        <div>
          <SectionTitle
            variant="v2"
            tag="Pour les créateurs"
            title="Développez votre carrière."
            subtitle="Monétisez votre créativité avec des outils professionnels et un réseau de marques premium."
            align="left"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorBenefits.map((b, i) => (
              <FeatureCard key={b.title} {...b} variant="v2" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
