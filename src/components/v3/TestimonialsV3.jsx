import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/content';

export default function TestimonialsV3() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v3"
          tag="Communauté"
          title="Ils racontent leur expérience."
          subtitle="Des collaborations réelles, des résultats concrets."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} variant="v3" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
