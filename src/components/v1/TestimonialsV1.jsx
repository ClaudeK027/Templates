import SectionTitle from '@/components/common/SectionTitle';
import TestimonialCard from '@/components/common/TestimonialCard';
import { testimonials } from '@/data/content';

export default function TestimonialsV1() {
  return (
    <section style={{ background: '#FFFBF5', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          variant="v1"
          tag="Témoignages"
          title="Ils nous font confiance."
          subtitle="Découvrez ce que disent les créateurs et marques qui utilisent INFLUKA."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={t.name} style={{ height: '100%' }}>
              <TestimonialCard testimonial={t} variant="v1" index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
