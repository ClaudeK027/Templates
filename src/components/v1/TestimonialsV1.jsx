import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/content';

export default function TestimonialsV1() {
  return (
    <section className="py-20 lg:py-28 bg-v1-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v1"
          tag="Témoignages"
          title="Ils nous font confiance."
          subtitle="Découvrez ce que disent les créateurs et marques qui utilisent INFLUKA."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} variant="v1" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
