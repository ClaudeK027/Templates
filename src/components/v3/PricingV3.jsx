import SectionTitle from '../common/SectionTitle';
import PricingCard from '../common/PricingCard';
import { pricingPlans } from '../../data/content';

export default function PricingV3() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-v3-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v3"
          tag="Tarifs"
          title="Simple et sans surprise."
          subtitle="Démarrez gratuitement et passez à la vitesse supérieure quand vous êtes prêt."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} variant="v3" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
