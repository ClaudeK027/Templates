import SectionTitle from '@/components/common/SectionTitle';
import PricingCard from '@/components/common/PricingCard';
import { pricingPlans } from '@/data/content';

export default function PricingV1() {
  return (
    <section id="pricing" style={{ background: '#ffffff', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          variant="v1"
          tag="Tarifs"
          title="Commencez gratuitement."
          subtitle="Évoluez vers un plan premium quand vous êtes prêt."
        />
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto items-stretch"
        >
          {pricingPlans.map((plan, i) => (
            <div key={plan.name} style={{ height: '100%' }}>
              <PricingCard plan={plan} variant="v1" index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
