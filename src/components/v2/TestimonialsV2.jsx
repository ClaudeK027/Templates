import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/content';

export default function TestimonialsV2() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v2"
          tag="Retours clients"
          title="La confiance se construit sur les résultats."
          subtitle="Marques et créateurs partagent leur expérience avec INFLUKA."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} variant="v2" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
