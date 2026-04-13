import SectionTitle from '../common/SectionTitle';
import PricingCard from '../common/PricingCard';
import { pricingPlans } from '../../data/content';

export default function PricingV2() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-v2-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v2"
          tag="Tarification"
          title="Des plans transparents et adaptés."
          subtitle="Aucun frais caché. Évoluez selon vos besoins."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} variant="v2" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
